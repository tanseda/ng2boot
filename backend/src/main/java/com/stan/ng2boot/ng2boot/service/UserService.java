package com.stan.ng2boot.ng2boot.service;

import com.stan.ng2boot.ng2boot.model.User;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UserService {

    public User createUser(User user) {
        user.setId(new Random().nextInt(1000));
        return user;
    }
}
