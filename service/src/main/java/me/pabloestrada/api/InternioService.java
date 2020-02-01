package me.pabloestrada.api;

import me.pabloestrada.core.user.User;
import java.util.Date;
public abstract class InternioService
{
    public abstract User getUser(final String username);
    public abstract void addInternship(final User user, final String locationCity, final String locationState, final Date startDate, final Date endDate, final String company );
}
