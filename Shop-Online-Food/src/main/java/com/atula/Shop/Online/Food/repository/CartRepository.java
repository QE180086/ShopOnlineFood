package com.atula.Shop.Online.Food.repository;

import com.atula.Shop.Online.Food.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    public Cart findByCustomerId(Long userId);
}
