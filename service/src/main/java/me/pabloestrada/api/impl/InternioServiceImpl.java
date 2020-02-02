package me.pabloestrada.api.impl;

import com.google.inject.Inject;
import me.pabloestrada.api.InternioService;
import me.pabloestrada.core.internship.InternshipInfo;
import me.pabloestrada.core.neighborhood.Neighborhood;
import me.pabloestrada.core.neighborhood.NeighborhoodHolder;
import me.pabloestrada.core.user.User;
import me.pabloestrada.core.user.UserDAO;
import me.pabloestrada.core.user.UserPreferences;
import org.bson.types.ObjectId;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class InternioServiceImpl extends InternioService
{

    private UserDAO userDAO;

    private NeighborhoodHolder neighborhoodHolder;

    @Inject
    public InternioServiceImpl(final UserDAO userDAO, final NeighborhoodHolder neighborhoodHolder) {
        this.userDAO = userDAO;
        this.neighborhoodHolder = neighborhoodHolder;
    }

    public User getUser(final String username) {
        System.out.println("#### Getting " + username);
        return userDAO.getUser(username).get();
    }

    @Override
    public void loadData() {
        User user = new User("user", "password", "pablof300@gmail.com");
        userDAO.insertUser(user);
    }

    public InternshipInfo addInternship(User user, String locationCity, String locationState, Date startDate, Date endDate, String company, int budget ) {
        InternshipInfo newInternship = new InternshipInfo( locationCity, locationState, startDate, endDate, budget);
        List<InternshipInfo> list = user.getInternships();
        list.add(newInternship);
        userDAO.addInternship(user, list);
        return newInternship;
    }
    public void addNeighborhoodToInternship(User user, ObjectId InternshipId, Neighborhood locationCity ) {
       int count =-1;
        for(int i=0;i<user.getInternships().size();i++) {
            if(user.getInternships().get(i).getId().equals(InternshipId)){
                count =i;
                user.getInternships().get(i).addOneNeighborhood(locationCity);
            }
        }
        if(count==-1){
            System.out.println("ERROR: Bogus Object ID in InternioServiceIMPL addneighborhoodtointernship method");
            return;
        }
        userDAO.addInternship(user,user.getInternships());
    }
    public List<Neighborhood> getNeighborhoods(String locationCity){
       return neighborhoodHolder.getNeighborhoodsByCity().get(locationCity.toLowerCase());
    }

    public void updatePreferences(User user, int [] responses ) {
        UserPreferences preferences = new UserPreferences( responses );
        user.setPreferences(preferences);
    }

    @Override
    public void updateFacebook(String username, String facebook) {

    }

    public void createUser(final String username, final String password, final String email){
        userDAO.insertUser(new User(username, password, email));
    }
    public void createUser(String username, String password, String email,String linkedin, String facebook, String instagram,int age,String nameLast,String nameFirst,String bio,int [] responses){
        userDAO.insertUser(new User(username, password, email,linkedin, facebook, instagram, age, nameLast,nameFirst,bio, responses));
    }

    public ArrayList<User> getRoommates(InternshipInfo internship) {
        return internship.getSavedRoommates();
    }
}
