package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.IngredientCategory;
import com.atula.Shop.Online.Food.model.IngredientsItem;
import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.repository.IngredientCategoryRepository;
import com.atula.Shop.Online.Food.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImp implements  IngredientsService{
    @Autowired
    private IngredientItemRepository ingredientItemRepository;
    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;
    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setName(name);

        return ingredientCategoryRepository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {

        Optional<IngredientCategory> opt = ingredientCategoryRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("ingredient category not found...");
        }
        return opt.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        restaurantService.findRestaurantById(id);
        return ingredientCategoryRepository.findByRestaurantId(id);
    }

    @Override
    public IngredientsItem createIngredientItem(String ingredientName, Long restaurantId, Long categoryId) throws Exception {
       Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
       IngredientCategory category = findIngredientCategoryById(categoryId);

       IngredientsItem ingredientsItem = new IngredientsItem();
       ingredientsItem.setName(ingredientName);
       ingredientsItem.setRestaurant(restaurant);
       ingredientsItem.setCategory(category);

       IngredientsItem savedIngredientItem = ingredientItemRepository.save(ingredientsItem);
       category.getIngredients().add(savedIngredientItem);

        return savedIngredientItem;
    }

    @Override
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) {
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> opt = ingredientItemRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("ingredient item not found...");
        }
        IngredientsItem ingredientsItem = opt.get();
        ingredientsItem.setInStoke(!ingredientsItem.isInStoke());
        return ingredientItemRepository.save(ingredientsItem);
    }
}
