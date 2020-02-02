package me.pabloestrada.core.neighborhood;

public final class Neighborhood 
{
    private String neighborhoodName;
    private String city;
    private String county;
    private String state;
    private String metropolitan;

    public Neighborhood() {
    }

    public Neighborhood(String neighborhoodName, String city, String metropolitan, String county, String state) {
        this.neighborhoodName = neighborhoodName;
        this.city = city;
        this.metropolitan = metropolitan;
        this.county = county;
        this.state = state;
    }

    public Neighborhood(String[] neighborhoodInfo) {
        this.neighborhoodName = neighborhoodInfo[0];
        this.city = neighborhoodInfo[2];
        this.metropolitan = neighborhoodInfo[4];
        this.county = neighborhoodInfo[3];
        this.state = neighborhoodInfo[5];
    }

    public String getNeighborhoodName() {
        return neighborhoodName;
    }

    public void setNeighborhoodName(String neighborhoodName) {
        this.neighborhoodName = neighborhoodName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getMetropolitan() {
        return metropolitan;
    }

    public void setMetropolitan(String metropolitan) {
        this.metropolitan = metropolitan;
    }
}