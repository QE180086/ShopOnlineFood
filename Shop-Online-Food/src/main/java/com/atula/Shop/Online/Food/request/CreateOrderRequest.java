package com.atula.Shop.Online.Food.request;

import com.atula.Shop.Online.Food.model.Address;
import lombok.Data;

@Data
public class CreateOrderRequest {
    private Long restaurantId;
        private Address deliveryAdress;
}
