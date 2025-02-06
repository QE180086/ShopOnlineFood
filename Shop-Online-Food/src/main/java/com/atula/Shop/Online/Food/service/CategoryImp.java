package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.Category;
import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryImp implements CategoryService{
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        Category category = new Category();
        Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
        category.setName(name);
        category.setRestaurant(restaurant);
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByRestaurant(Long id) throws Exception {
        Restaurant restaurant =restaurantService.getRestaurantByUserId(id);
        return categoryRepository.findByRestaurantId(restaurant.getId());
    }

    @Override
    public List<Category> findCategoryByRestaurantId(Long restaurantId) throws Exception {
        Restaurant restaurant =restaurantService.findRestaurantById(restaurantId);
        return categoryRepository.findByRestaurantId(restaurant.getId());
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if(optionalCategory.isEmpty()){
            throw  new Exception("category not found");
        }

        return optionalCategory.get();
    }
}
