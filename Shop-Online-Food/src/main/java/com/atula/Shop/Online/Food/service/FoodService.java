package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.Category;
import com.atula.Shop.Online.Food.model.Food;
import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws  Exception;

    public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarin, boolean isNonveg, boolean isSeasonal, String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;
    public Food updateAvailibilityStatus(Long foodId) throws Exception;



}
