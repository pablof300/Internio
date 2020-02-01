package me.pabloestrada.api.impl;

import me.pabloestrada.api.MatchmakingService;
import me.pabloestrada.core.user.User;
import org.bson.types.ObjectId;

import java.util.ArrayList;

public abstract class MatchingMakingServiceImpl extends MatchmakingService {
    public abstract ArrayList<User> getPotentialMatches(String username, ObjectId internshipId);
}
