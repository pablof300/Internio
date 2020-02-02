package me.pabloestrada.api.impl;

import me.pabloestrada.api.MatchmakingService;
import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;
import org.bson.types.ObjectId;

import java.util.ArrayList;

public class MatchingMakingServiceImpl extends MatchmakingService {

    public ArrayList<User> getPotentialMatches(String username, ObjectId internshipId) {
        UserDAO DB = new UserDAO();
        User Current = DB.getUser(username).get();
//        Current.getInternshipInfo(internshipId);
        ArrayList<User> AllUsers = DB.getAllUsers();
        for (int i = 0; i < AllUsers.size(); i++) {
            //compare times
            int timeLeway = Math.min(Current.getPreferences().getAQuestionResponses(10), AllUsers.get(i).getPreferences().getAQuestionResponses(10));
            for (int j = 0; i < AllUsers.get(i).getInternships().size(); j++) {


            }
            //compare locations
            if(true){}
            //assosciate a percent value of compatiblity
        }
        return AllUsers; // Should be empty if no matches are found
    }

}
