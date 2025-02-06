package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.Category;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.service.CategoryService;
import com.atula.Shop.Online.Food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @PostMapping("/admin/createCategory")
    public ResponseEntity<Category> createCategory(
            @RequestHeader("Authorization") String jwt,
            @RequestBody Category category) throws Exception {

        User user= userService.findUserByJwtToken(jwt);
         Category createCategory = categoryService.createCategory(category.getName(),user.getId());

        return  new ResponseEntity<>(createCategory, HttpStatus.CREATED);
    }

    @GetMapping("/getRestaurantCategory/{restaurantId}")
    public ResponseEntity<List<Category>> getRestaurantCategory(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long restaurantId
            ) throws Exception {

        List<Category> categories = categoryService.findCategoryByRestaurantId(restaurantId);

        return  new ResponseEntity<>(categories, HttpStatus.OK);
    }


}
