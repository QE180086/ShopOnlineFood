package com.atula.Shop.Online.Food.request;

import lombok.Data;

import java.util.List;
@Data
public class CreateAddCartItemRequest {
    private Long foodId;
    private int quantity;
    private List<String> ingredients;
}
