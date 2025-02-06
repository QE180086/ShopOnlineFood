package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Food;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.service.FoodService;
import com.atula.Shop.Online.Food.service.RestaurantService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/searchFood")
    public ResponseEntity<List<Food>> searchFood(@Param("keyword") String keyword,
                                           @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.searchFood(keyword);
        return  new ResponseEntity<>(foods, HttpStatus.OK);

    }

    @GetMapping("/getRestaurantFood/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(@RequestParam (required = false) boolean vegetarian,
                                                        @RequestParam(required = false) boolean nonveg,
                                                        @RequestParam (required = false) boolean seasonal,
                                                        @RequestParam(required = false) String food_category,
                                                        @PathVariable Long restaurantId,
                                                        @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.getRestaurantFood(restaurantId,vegetarian,nonveg,seasonal,food_category);


        return  new ResponseEntity<>(foods, HttpStatus.OK);

    }
}
