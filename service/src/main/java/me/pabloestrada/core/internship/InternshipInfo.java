package me.pabloestrada.core.internship;

import java.util.Date;

public final class InternshipInfo
{
    private String locationCity;
    private String locationState;
    private Date startDate;
    private Date endDate;
    private String company;

    public InternshipInfo() {
    }

    public InternshipInfo(String  locationCity, String locationState, Date startDate,Date endDate) {
        this.locationCity = locationCity;
        this.locationState = locationState;
        this.startDate = startDate;
        this.endDate = endDate;

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
}