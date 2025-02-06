package com.atula.Shop.Online.Food.service;

import com.atula.Shop.Online.Food.model.USER_ROLE;
import com.atula.Shop.Online.Food.model.User;
import com.atula.Shop.Online.Food.repository.UserRepository;
import com.atula.Shop.Online.Food.response.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        AuthResponse au = new AuthResponse();
        if(user==null){
            throw new UsernameNotFoundException("user not found with email: " + username);
        }
        USER_ROLE role = user.getRole();

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role.toString())); // cho spring hieu quyen
        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }
}
