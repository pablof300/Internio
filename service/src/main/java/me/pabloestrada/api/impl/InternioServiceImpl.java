package me.pabloestrada.api.impl;

import com.google.inject.Inject;
import me.pabloestrada.api.InternioService;
import me.pabloestrada.core.internship.InternshipInfo;
import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;

import java.util.Date;
import java.util.List;

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

    @Override
    public void loadData() {
        User user = new User("user", "password", "pablof300@gmail.com");
        userDAO.insertUser(user);
    }

    public void addInternship(User user, String locationCity, String locationState, Date startDate, Date endDate, String company ) {
        InternshipInfo newInternship = new InternshipInfo( locationCity, locationState, startDate, endDate );

        List<InternshipInfo> list = user.getInternships();
        list.add(newInternship);
        user.setInternships(list);
    }

    public void createUser(final String username, final String password, final String email){
        User newUser = new User(username, password, email);
        userDAO.insertUser(newUser);
    }
}
