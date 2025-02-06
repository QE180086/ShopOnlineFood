package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Order;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateOrderRequest;
import com.atula.Shop.Online.Food.service.OrderService;
import com.atula.Shop.Online.Food.service.UserService;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    @PostMapping("/createOrder")
    public ResponseEntity<Order> createOrder(@RequestBody CreateOrderRequest req,
                                             @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req,user);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }
    @GetMapping("/orderHistory")
    public ResponseEntity<List<Order>> getOrderHistory(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order> orders = orderService.getUserOrder(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


}
