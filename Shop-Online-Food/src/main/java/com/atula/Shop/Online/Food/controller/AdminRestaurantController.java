package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateRestaurantRequest;
import com.atula.Shop.Online.Food.response.MessageRespone;
import com.atula.Shop.Online.Food.service.RestaurantService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private UserService userService;

    @PostMapping("/createRestaurant")
    private ResponseEntity<Restaurant> createRestaurant(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.createRestaurant(req,user);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<Restaurant> updateRestaurant(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurant(id,req);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<MessageRespone> deleteRestaurant(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        restaurantService.deleteRestaurant(id);
        MessageRespone mes = new MessageRespone();
        mes.setMessage("delete successfull");
        return new ResponseEntity<>(mes, HttpStatus.OK);
    }


    @PutMapping("/{id}/status")
    private ResponseEntity<Restaurant> statusRestaurant(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping("/user")
    private ResponseEntity<Restaurant> findRestaurantByUserId(
            @RequestHeader("Authorization") String jwt) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.findRestaurantById(user.getId());

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }




}
