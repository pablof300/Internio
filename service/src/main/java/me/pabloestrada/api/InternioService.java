package me.pabloestrada.api;

import me.pabloestrada.core.user.User;

public abstract class InternioService
{
    public abstract User getUser(final String username);

    public abstract void loadData();
}
