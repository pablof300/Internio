package me.pabloestrada.api;

import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;
import org.bson.types.ObjectId;

import java.util.ArrayList;

public abstract class MatchmakingService
{
    public abstract ArrayList<User> getPotentialMatches(String username, ObjectId internshipId);

}

