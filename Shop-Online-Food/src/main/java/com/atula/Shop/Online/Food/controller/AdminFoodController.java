package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Food;
import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateFoodRequest;
import com.atula.Shop.Online.Food.response.MessageRespone;
import com.atula.Shop.Online.Food.service.FoodService;
import com.atula.Shop.Online.Food.service.RestaurantService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminFoodController {
    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/createFood")
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
                                           @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Food food=foodService.createFood(req,req.getCategory(),restaurant);
        return  new ResponseEntity<>(food, HttpStatus.CREATED);

    }

    @DeleteMapping("/deleteFood/{id}")
    public ResponseEntity<MessageRespone> deleteFood(@RequestHeader("Authorization") String jwt,
                                                     @PathVariable Long id) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        foodService.deleteFood(id);
        MessageRespone messageRespone = new MessageRespone();
        messageRespone.setMessage("delete food success");
        return  new ResponseEntity<>(messageRespone, HttpStatus.OK);

    }

    @PutMapping("/updateFood/{id}")
    public ResponseEntity<Food> updateFoodAvabilityStatus(@RequestHeader("Authorization") String jwt,
                                                     @PathVariable Long id) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Food food = foodService.updateAvailibilityStatus(id);

        return  new ResponseEntity<>(food, HttpStatus.OK);

    }


}
