package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.Cart;
import com.atula.Shop.Online.Food.model.CartItem;
import com.atula.Shop.Online.Food.model.Food;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.repository.CartItemRepository;
import com.atula.Shop.Online.Food.repository.CartRepository;
import com.atula.Shop.Online.Food.repository.FoodRepository;
import com.atula.Shop.Online.Food.request.CreateAddCartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImp implements CartService{
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private FoodService foodService;
    @Override
    public CartItem addItemToCart(CreateAddCartItemRequest req, String jwt) throws Exception {


        User user = userService.findUserByJwtToken(jwt);
        Food food =foodService.findFoodById(req.getFoodId());
        Cart cart = cartRepository.findByCustomerId(user.getId());
        for(CartItem cartItem: cart.getItems()){
            if (cartItem.getFood().equals(food)) {
                int newQuantity=cartItem.getQuantity()+ req.getQuantity();
                return updateCartItemQuantity(cartItem.getId(),newQuantity);
            }
        }
        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setFood(food);
        cartItem.setQuantity(req.getQuantity());
        cartItem.setIngredients(req.getIngredients().stream().toList());
        cartItem.setTotalPrice(req.getQuantity()*food.getPrice());

        CartItem savedCartItem = cartItemRepository.save(cartItem);
        cart.getItems().add(savedCartItem);
        return cartItem;
    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
        if(cartItemOptional.isEmpty()){
            throw new Exception("cart item not found...");
        }
        CartItem updateCartItem = cartItemOptional.get();
        updateCartItem.setQuantity(quantity);
        updateCartItem.setTotalPrice(quantity*updateCartItem.getFood().getPrice());
        return cartItemRepository.save(updateCartItem);
    }

    @Override
    public Cart removeCartItemFromCart(Long cartItemId, String jwt) throws Exception {

        User user =userService.findUserByJwtToken(jwt);
        Cart cart = cartRepository.findByCustomerId(user.getId());
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
        if(cartItemOptional.isEmpty()){
            throw new Exception("cart item not found...");
        }
        CartItem cartItem = cartItemOptional.get();
        cart.getItems().remove(cartItem);

        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotals(Cart cart) throws Exception {
        Long total = 0L;
        for(CartItem cartItem: cart.getItems()){
            total+=cartItem.getFood().getPrice()*cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
        Optional<Cart> optionalCart = cartRepository.findById(id);
        if(optionalCart.isEmpty()){
            throw new Exception("cart not found with id "+ id);
        }
        return optionalCart.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) throws Exception {
        Cart cart=cartRepository.findByCustomerId(userId);
        cart.setTotal(calculateCartTotals(cart));
        return cart;
    }

    @Override
    public Cart clearCart(Long userId) throws Exception {

        Cart cart = cartRepository.findByCustomerId(userId);
        cart.getItems().clear();
        return cartRepository.save(cart);
    }
}
