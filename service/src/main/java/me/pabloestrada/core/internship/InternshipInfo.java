package me.pabloestrada.core.internship;

import me.pabloestrada.core.neighborhood.Neighborhood;
import me.pabloestrada.core.user.User;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Date;

public final class InternshipInfo
{
    private String locationCity;
    private String locationState;
    private Date startDate;
    private Date endDate;
    private String company;
    private ObjectId id;
    private ArrayList<Neighborhood> neighborhoods;
    private ArrayList<User> savedRoommates;
    private int budget;

    public InternshipInfo() {
    }

    public InternshipInfo(String locationCity, String locationState, Date startDate, Date endDate, int budget) {
        this.locationCity = locationCity;
        this.locationState = locationState;
        this.startDate = startDate;
        this.endDate = endDate;
        this.budget = budget;
        this.neighborhoods= new ArrayList<Neighborhood>();
        this.id = new ObjectId();
        this.savedRoommates = new ArrayList<User>();
    }

    public String getLocationCity() {
        return locationCity;
    }

    public void setLocationCity(String locationCity) {
        this.locationCity = locationCity;
    }

    public String getLocationState() {
        return locationState;
    }

    public void setLocationState(String locationState) {
        this.locationState = locationState;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public ArrayList<Neighborhood> getNeighborhoods() {
        return neighborhoods;
    }

    public void removeAllNeighborhoods() {
        this.neighborhoods = new ArrayList<Neighborhood>();
    }

    public void addOneNeighborhood(Neighborhood neighborhood) {
        this.neighborhoods.add(neighborhood);
    }

    public void removeOneNeighborhoods(Neighborhood neighborhood) {
        for(int i=0; i < neighborhoods.size(); i++){
            if(neighborhood.equals(neighborhoods.get(i))){
                neighborhoods.remove(i);
                return;
            }
        }
    }

    public ObjectId getId() { return id; }

    public void setId(ObjectId id) { this.id = id; }

    public ArrayList<User> getSavedRoommates() {
        return savedRoommates;
    }

    public void setSavedRoommates(ArrayList<User> savedRoommmates) {
        this.savedRoommates = savedRoommmates;
    }

    public void saveARoommate(User savedRoommate) {
        this.savedRoommates.add(savedRoommate);
    }

    public void removeARoommate(User savedRoommate) {
        for(int i = 0; i < savedRoommates.size(); i++) {
            if(savedRoommate.getUsername().equals(savedRoommates.get(i).getUsername())) {
                savedRoommates.remove(i);
                return;
            }
        }
    }

    public int getBudget() {
        return budget;
    }

    public void setBudget(int budget) {
        this.budget = budget;
    }
}