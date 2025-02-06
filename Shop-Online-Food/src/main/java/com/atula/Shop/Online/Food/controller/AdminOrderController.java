package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Order;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.service.OrderService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    @GetMapping("/order/restaurant/{id}")
    public ResponseEntity<List<Order>> getOrderHistory(@RequestHeader("Authorization") String jwt,
                                                 @PathVariable Long id,
                                                 @RequestParam(required = false) String order_status) throws Exception {
        User user =userService.findUserByJwtToken(jwt);
        List<Order> orders =orderService.getRestaurant(id,order_status);
        return new ResponseEntity<>(orders, HttpStatus.OK);

    }

    @PutMapping("/order/{id}/{orderStatus}")
    public ResponseEntity<Order> updateOrderStatus(@RequestHeader("Authorization") String jwt,
                                                       @PathVariable Long id,
                                                       @PathVariable String orderStatus) throws Exception {
        User user =userService.findUserByJwtToken(jwt);
        Order order =orderService.updateOrder(id,orderStatus);
        return new ResponseEntity<>(order, HttpStatus.OK);

    }


}
