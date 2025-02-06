package com.atula.Shop.Online.Food.repository;

import com.atula.Shop.Online.Food.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
