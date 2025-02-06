package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.Category;
import com.atula.Shop.Online.Food.model.User;

import java.util.List;

public interface CategoryService {
    public Category createCategory(String name, Long userId) throws Exception;
    public List<Category> findCategoryByRestaurant(Long id) throws  Exception;
    public Category findCategoryById(Long id) throws Exception;
    public List<Category> findCategoryByRestaurantId(Long restaurantId) throws Exception;
}
