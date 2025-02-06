package com.atula.Shop.Online.Food.request;

import com.atula.Shop.Online.Food.model.Category;
import com.atula.Shop.Online.Food.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegetarin;
    private boolean seasional;
    private List<IngredientsItem> ingredients;


}
