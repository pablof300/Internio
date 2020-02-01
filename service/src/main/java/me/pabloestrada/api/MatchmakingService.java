package me.pabloestrada.api;

import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;
import org.bson.types.ObjectId;

import java.util.ArrayList;

public abstract class MatchmakingService
{
    public ArrayList<User> getPotentialMatches(String username, ObjectId internshipId){
      UserDAO DB = new UserDAO();
      User Current= DB.getUser(username).get();
      Current.getInternshipInfo(internshipId);
      ArrayList <User> AllUsers= DB.getallUsers();
      for(int i=0; i<AllUsers.size();i++){
          //compare times
          int timeLeway = Math.min(Current.getPreferences().getAQuestionResponses(10),AllUsers.get(i).getPreferences().getAQuestionResponses(10));
          for(int j=0; i<AllUsers.get(i).getInternships().size();j++){


          }
      }

    }
}

