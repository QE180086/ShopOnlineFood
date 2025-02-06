package com.atula.Shop.Online.Food.request;

import lombok.Data;

@Data
public class CreateIngredientItem {
    private  String name;
    private Long restaurantId;
    private Long categoryId;
}
