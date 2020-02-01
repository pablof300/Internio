package me.pabloestrada.api;

import me.pabloestrada.core.user.User;

import java.util.Date;

public abstract class InternioService
{
    public abstract User getUser(final String username);

    public abstract void loadData();

    public abstract void addInternship(User user, String locationCity, String locationState, Date startDate, Date endDate, String company);

    public abstract void createUser(String username, String password, String email);
}
