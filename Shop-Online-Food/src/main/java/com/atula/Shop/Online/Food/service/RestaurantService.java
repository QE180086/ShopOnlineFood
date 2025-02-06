package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.dto.RestaurantDto;
import com.atula.Shop.Online.Food.model.Restaurant;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.request.CreateRestaurantRequest;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest createRestaurantRequest, User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id)throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavourites(Long restaurantId, User user) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;






}
