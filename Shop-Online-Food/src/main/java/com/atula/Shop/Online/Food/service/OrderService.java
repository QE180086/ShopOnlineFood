package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.Order;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateOrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(CreateOrderRequest req, User user) throws Exception;
    public Order updateOrder(Long orderId, String orderStatus) throws  Exception;

    public  void cancelOrder(Long orderId) throws Exception;
    public List<Order> getUserOrder(Long userId) throws Exception;
    public List<Order> getRestaurant(Long restaurantId, String orderStatus) throws Exception;
    public Order findOrderById(Long orderId)throws  Exception;

}
