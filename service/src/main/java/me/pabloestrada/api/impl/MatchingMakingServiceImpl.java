package me.pabloestrada.api.impl;

import me.pabloestrada.api.MatchmakingService;
import me.pabloestrada.core.internship.InternshipInfo;
import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;
import org.bson.types.ObjectId;

import java.util.ArrayList;

public class MatchingMakingServiceImpl extends MatchmakingService {

    public ArrayList<User> getPotentialMatches(String username, ObjectId internshipId) {
        UserDAO DB = new UserDAO();
        User Current = DB.getUser(username).get();
        InternshipInfo CurrentInternship= null;
//        InternshipInfo CurrentInternship= Current.getInternshipInfo(internshipId);
        ArrayList<User> AllUsers = DB.getAllUsers();
        for (int i = 0; i < AllUsers.size(); i++) {
            //remove roomates who are not within a 1week range of your internship
            //int timeLeway = 1;//Math.min(Current.getPreferences().getAQuestionResponses(10), AllUsers.get(i).getPreferences().getAQuestionResponses(10));
            for (int j = 0; i < AllUsers.get(i).getInternships().size(); j++) {
                if(
                        Math.abs(AllUsers.get(i).getInternships().get(j).getStartDate().getTime()-CurrentInternship.getStartDate().getTime())
                                + Math.abs(AllUsers.get(i).getInternships().get(j).getEndDate().getTime()-CurrentInternship.getEndDate().getTime())> 604800000
                ){
                    AllUsers.remove(i);
                    i--;
                    break;
                }
                // Remove people who dont have any roomates you have
                boolean NotFound= true;
                for(int k=0; k<AllUsers.get(i).getInternships().get(j).getNeighborhoods().size();k++){
                    for( int z=0; z<CurrentInternship.getNeighborhoods().size();z++){
//                        if(CurrentInternship.getNeighborhoods().get(z).compareWith(AllUsers.get(i).getInternships().get(j).getNeighborhoods())){
//                            NotFound = false;
//                        }
                    }
                }
                if(NotFound){
                    AllUsers.remove(i);
                    i--;
                    break;
                }
            }
        }
        //Sort RemainingList by most compatible
        ArrayList<User> Coamptibility0 = new ArrayList<User>();
        ArrayList<User> Coamptibility1 = new ArrayList<User>();
        ArrayList<User> Coamptibility2 = new ArrayList<User>();
        ArrayList<User> Coamptibility3 = new ArrayList<User>();
        ArrayList<User> Coamptibility4 = new ArrayList<User>();
        ArrayList<User> Coamptibility5 = new ArrayList<User>();
        ArrayList<User> Coamptibility6 = new ArrayList<User>();
        ArrayList<User> Coamptibility7 = new ArrayList<User>();
        ArrayList<User> Coamptibility8 = new ArrayList<User>();
        ArrayList<User> Coamptibility9 = new ArrayList<User>();
        ArrayList<User> Coamptibility10 = new ArrayList<User>();
        for(int i=0 ; i < AllUsers.size();i++) {
            int count = 0;
            for (int j = 0; j < 10; j++) {
                if (AllUsers.get(i).getPreferences().getAQuestionResponses(j) == Current.getPreferences().getAQuestionResponses(j)) {
                    count++;
                }
            }
            switch(count)
            {
                case 0:
                    Coamptibility0.add(AllUsers.get(i));
                    break;
                case 1:
                    Coamptibility1.add(AllUsers.get(i));
                    break;
                case 2:
                    Coamptibility2.add(AllUsers.get(i));
                    break;
                case 3:
                    Coamptibility3.add(AllUsers.get(i));
                    break;
                case 4:
                    Coamptibility4.add(AllUsers.get(i));
                    break;
                case 5:
                    Coamptibility5.add(AllUsers.get(i));
                    break;
                case 6:
                    Coamptibility6.add(AllUsers.get(i));
                    break;
                case 7:
                    Coamptibility7.add(AllUsers.get(i));
                    break;
                case 8:
                    Coamptibility8.add(AllUsers.get(i));
                    break;
                case 9:
                    Coamptibility9.add(AllUsers.get(i));
                    break;
                case 10:
                    Coamptibility10.add(AllUsers.get(i));
                    break;

            }

        }
        Coamptibility10.addAll(Coamptibility9);
        Coamptibility10.addAll(Coamptibility8);
        Coamptibility10.addAll(Coamptibility7);
        Coamptibility10.addAll(Coamptibility6);
        Coamptibility10.addAll(Coamptibility5);
        Coamptibility10.addAll(Coamptibility4);
        Coamptibility10.addAll(Coamptibility3);
        Coamptibility10.addAll(Coamptibility2);
        Coamptibility10.addAll(Coamptibility1);
        Coamptibility10.addAll(Coamptibility0);
        return Coamptibility10; // Should be empty if no matches are found
    }

}
