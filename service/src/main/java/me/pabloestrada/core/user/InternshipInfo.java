package me.pabloestrada.core.user;

import org.bson.types.ObjectId;

import java.util.Objects;

public final class InternshipInfo
{
    private String locationCity;
    private String locationState;
    private Date startDate;
    private Date endDate;
    private String company;



    public InternshipInfo() {
    }

    public InternshipInfo(String  locationCity, String locationState, int startYear, int startMonth, int startDay, int endYear, int endMonth, int endDay) {
        this.locationCity = locationCity;
        this.locationState = locationState;
        startDate = new Date(startDate, startMonth, startDay);
        endDate = new Date(endDate, endMonth, endDay);

    }

    public String getCity() {
        return locationCity;
    }

    public void setCity(String locationCity) {
        this.locationCity = locationCity;
    }

    public String getState() {
        return locationState;
    }

    public void setState(String locationState) {
        this.locationState = locationState;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(int startYear, int startMonth, int startDay) {
        this.startDate = new Date(startYear, startMonth, startDate);
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(int endYear, int endMonth, int endDay) {
        this.endDate = new Date(endYear, endMonth, endDate);
    }

    public String getCompany() {
        return company;
    }

    public void setCompany() {
        this.company = company;
    }
}