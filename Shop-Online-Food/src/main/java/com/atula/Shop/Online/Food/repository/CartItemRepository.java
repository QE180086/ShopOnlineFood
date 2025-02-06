package com.atula.Shop.Online.Food.repository;

import com.atula.Shop.Online.Food.model.Cart;
import com.atula.Shop.Online.Food.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {



}
