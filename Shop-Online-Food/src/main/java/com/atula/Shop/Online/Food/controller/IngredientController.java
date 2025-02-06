package com.atula.Shop.Online.Food.controller;

import com.atula.Shop.Online.Food.model.IngredientCategory;
import com.atula.Shop.Online.Food.model.IngredientsItem;
import com.atula.Shop.Online.Food.request.CreateIngredientCategoryRequest;
import com.atula.Shop.Online.Food.request.CreateIngredientItem;
import com.atula.Shop.Online.Food.service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class IngredientController {
    @Autowired
    private IngredientsService ingredientsService;
    @PostMapping("api/admin/ingredient/createIngredientCategory")
    public ResponseEntity<IngredientCategory> createIngredientCategory (@RequestBody CreateIngredientCategoryRequest req) throws Exception {

        IngredientCategory category = ingredientsService.createIngredientCategory(req.getName(),req.getRestaurantId());

        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PostMapping("api/admin/ingredient/createIngredientItem")
    public ResponseEntity<IngredientsItem> createIngredientItem (@RequestBody CreateIngredientItem req) throws Exception {

        IngredientsItem item = ingredientsService.createIngredientItem(req.getName(), req.getRestaurantId(),req.getCategoryId());

        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PutMapping("/admin/ingredient/{id}/updatestoke")
    public ResponseEntity<IngredientsItem> updateIngridentItem (@PathVariable Long id) throws Exception {
            IngredientsItem ingredientsItem = ingredientsService.updateStock(id);
            return new ResponseEntity<>(ingredientsItem, HttpStatus.OK);

    }

    @GetMapping("ingredient/restaurant/{id}/item")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredientItem(@PathVariable Long id) throws Exception {
        List<IngredientsItem> items = ingredientsService.findRestaurantIngredients(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("ingredient/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(@PathVariable Long id) throws Exception {
        List<IngredientCategory> categories = ingredientsService.findIngredientCategoryByRestaurantId(id);
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }



}
