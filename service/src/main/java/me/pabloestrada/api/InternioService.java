package me.pabloestrada.api;

import me.pabloestrada.core.internship.InternshipInfo;
import me.pabloestrada.core.neighborhood.Neighborhood;
import me.pabloestrada.core.user.User;
import org.bson.types.ObjectId;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public abstract class InternioService {
    public abstract User getUser(final String username);

    public abstract void loadData();

    public abstract void addInternship(User user, String locationCity, String locationState, Date startDate, Date endDate, String company);

    public abstract void createUser(String username, String password, String email);

    public abstract void updatePreferences(User user, int[] responses);

    public abstract void updateFacebook(final String username, final String facebook);

    public abstract List<Neighborhood> getNeighborhoods(String locationCity);

    public abstract void addNeighborhoodToInternship(User user, ObjectId InternshipId, Neighborhood locationCity);

    public abstract void createUser(String username, String password, String email, String linkedin, String facebook, String instagram, int age, String nameLast, String nameFirst, String bio, int[] responses);

    public abstract ArrayList<User> getRoommates(InternshipInfo internship);
}