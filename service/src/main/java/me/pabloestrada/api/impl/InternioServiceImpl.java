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
    public void addNeighborhoodToInternship(User user, ObjectId InternshipId, Neighborhood locationCity ) {

    }
    public List<Neighborhood> getNeighborhoods(String locationCity){
       return neighborhoodHolder.getNeighborhoodsByCity().get(locationCity);
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
}
