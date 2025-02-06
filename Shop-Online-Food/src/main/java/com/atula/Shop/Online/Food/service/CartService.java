package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.Cart;
import com.atula.Shop.Online.Food.model.CartItem;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateAddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(CreateAddCartItemRequest req, String jwt) throws  Exception;
    public CartItem updateCartItemQuantity(Long cartItemId, int quantity ) throws  Exception;
    public Cart removeCartItemFromCart(Long cartItemId, String jwt) throws Exception;
    public Long calculateCartTotals(Cart cart) throws Exception;
    public Cart findCartById(Long id) throws  Exception;
    public Cart findCartByUserId(Long userId) throws  Exception;
    public Cart clearCart(Long id) throws Exception;


}
