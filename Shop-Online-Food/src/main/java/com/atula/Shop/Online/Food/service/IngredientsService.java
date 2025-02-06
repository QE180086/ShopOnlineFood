package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.IngredientCategory;
import com.atula.Shop.Online.Food.model.IngredientsItem;
import com.atula.Shop.Online.Food.model.Restaurant;

import java.util.List;

public interface IngredientsService {

    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws  Exception;
    public  IngredientCategory findIngredientCategoryById(Long id) throws Exception;
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws  Exception;
    public IngredientsItem createIngredientItem(String ingredientName, Long restaurantId,Long categoryId) throws  Exception;
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId);
    public IngredientsItem updateStock(Long id) throws Exception;

}
