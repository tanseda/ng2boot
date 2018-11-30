package com.stan.ng2boot.ng2boot.controller;

import com.stan.ng2boot.ng2boot.model.User;
import com.stan.ng2boot.ng2boot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/retrieve")
    public ResponseEntity retrieve() {
        return new ResponseEntity( HttpStatus.NO_CONTENT);
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity(userService.createUser(user), HttpStatus.CREATED);
    }
}
