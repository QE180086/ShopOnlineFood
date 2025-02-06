package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.dto.RestaurantDto;
import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateRestaurantRequest;
import com.atula.Shop.Online.Food.service.RestaurantService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private UserService userService;

    @GetMapping("/search")
    private ResponseEntity<List<Restaurant>>searchRestaurant(
            @RequestHeader("Authorization") String jwt,
           @RequestParam String keyword) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        List<Restaurant> restaurant = restaurantService.searchRestaurant(keyword);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }


    @GetMapping("/getRestaurant")
    private ResponseEntity<List<Restaurant>>getAllRestaurant(
            @RequestHeader("Authorization") String jwt) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        List<Restaurant> restaurant = restaurantService.getAllRestaurant();

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Restaurant>findRestaurantById(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.findRestaurantById(id);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favourites")
    private ResponseEntity<RestaurantDto>addToFavourites(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws Exception{

        User user =userService.findUserByJwtToken(jwt);

        RestaurantDto restaurant = restaurantService.addToFavourites(id,user);


        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

}
