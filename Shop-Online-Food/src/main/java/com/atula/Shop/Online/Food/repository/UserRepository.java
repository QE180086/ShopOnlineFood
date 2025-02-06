package com.atula.Shop.Online.Food.repository;

import com.atula.Shop.Online.Food.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByEmail(String userName);

}
