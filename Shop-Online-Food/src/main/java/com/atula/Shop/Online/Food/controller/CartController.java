package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Cart;
import com.atula.Shop.Online.Food.model.CartItem;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateAddCartItemRequest;
import com.atula.Shop.Online.Food.request.UpdateCartItemRequest;
import com.atula.Shop.Online.Food.service.CartService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;

    @PostMapping("/cart/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody CreateAddCartItemRequest req,
                                                  @RequestHeader("Authorization") String jwt) throws Exception {
            CartItem cartItem = cartService.addItemToCart(req,jwt);
            return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
    }

    @PutMapping("/cart/updateItem")
    public ResponseEntity<CartItem> updateCartItem(@RequestBody UpdateCartItemRequest req,
                                                  @RequestHeader("Authorization") String jwt) throws Exception {
        CartItem cartItem = cartService.updateCartItemQuantity(req.getCartItemId(), req.getQuantity());
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    @DeleteMapping("/cart-item/{id}/remove")
    public ResponseEntity<Cart> removeCartItem(@PathVariable Long id,
                                                   @RequestHeader("Authorization") String jwt) throws Exception {
        Cart cart = cartService.removeCartItemFromCart(id, jwt);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/cart/clear")
    public ResponseEntity<Cart> clearCart(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.clearCart(user.getId());
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @GetMapping("/cart")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findCartByUserId(user.getId());
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }






}
