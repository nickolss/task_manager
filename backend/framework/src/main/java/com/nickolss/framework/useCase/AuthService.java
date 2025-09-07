package com.nickolss.framework.useCase;

import org.springframework.stereotype.Service;
import service.AuthInterface;

@Service
public class AuthService implements AuthInterface {
    @Override
    public void register(String name, String email, String password) {
        //TODO implement register with supabase
    }

    @Override
    public void login(String email, String password) {
        //TODO implement login with supabase
    }
}
