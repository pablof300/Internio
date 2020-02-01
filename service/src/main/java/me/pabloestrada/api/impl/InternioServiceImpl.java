package me.pabloestrada.api.impl;

import com.google.inject.Inject;
import me.pabloestrada.api.InternioService;
import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;

public class InternioServiceImpl
    extends InternioService
{

    private UserDAO userDAO;

    @Inject
    public InternioServiceImpl(final UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public User getUser(final String username) {
        return userDAO.getUser(username).get();
    }

//    public String getDeveloperName() {
//        User user = new User("user", "password");
//        userDAO.insertUser(user);
//        return "Pablo Estrada :)";
//    }
}
