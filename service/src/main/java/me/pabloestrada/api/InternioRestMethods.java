package me.pabloestrada.api;

import com.google.inject.Inject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import me.pabloestrada.core.internship.InternshipInfo;
import me.pabloestrada.core.neighborhood.Neighborhood;
import me.pabloestrada.core.user.User;

import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/internio")
@Api(value = "/internio")
public class InternioRestMethods
{
    private InternioService delegate;

    @Inject
    public InternioRestMethods(final InternioService delegate) {
        this.delegate = delegate;
    }

    @GET
    @ApiOperation(value = "Getting user info")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user")
    public User getUser(@QueryParam("username") final String username) {
        return delegate.getUser(username);
    }

    @POST
    @ApiOperation(value = "Adding an internship to a User")
    @Path("/addInternship")
    public void addInternshipToUser(
      @QueryParam("locationCity") final String locationCity,
      @QueryParam("locationState") final String locationState,
      @QueryParam("startDate") final long startDate,
      @QueryParam("endDate") final long endDate,
      @QueryParam("company") final String company,
      @QueryParam("username") final String username) {

        //username is unique, query it in DB to find the specific User
        // use the User object that we find, and use the add method (we will make) within User class to modify our InternshipInfo
        delegate.addInternship(delegate.getUser(username), locationCity, locationState, new Date(startDate), new Date(endDate), company);
    }

    @POST
    @ApiOperation(value = "Adding a Neighborhood to an Internship")
    @Path("/addNeighborhoodToInternship")
    public void addNeighborhoodToInternship(
            @QueryParam("neighborhoodName") final String neighborhoodName,
            @QueryParam("city") final String cityName,
            @QueryParam("username") final String userName){

    }

    @GET
    @ApiOperation(value = "getting list of neighborhoods in a city")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getneighborhoods")
    public List<Neighborhood> getNeighborhoods(
            @QueryParam("locationCity") final String locationCity){
        return delegate.getNeighborhoods(locationCity);
    }

    @GET
    @ApiOperation(value = "load data")
    @Path("/data")
    public void loadData() {
        delegate.loadData();
    }

    @POST
    @ApiOperation(value = "Create Ultimate user")
    @Path("/createFullUser")
    public void createFullUser(
            @QueryParam("username") final String username,
            @QueryParam("firstname") final String firstname,
            @QueryParam("lastname") final String lastname,
            @QueryParam("email") final String email,
            @QueryParam("password") final String password,
            @QueryParam("age") final int age,
            @QueryParam("Q1") final int R1,
            @QueryParam("Q2") final int R2,
            @QueryParam("Q3") final int R3,
            @QueryParam("Q4") final int R4,
            @QueryParam("Q5") final int R5,
            @QueryParam("Q6") final int R6,
            @QueryParam("Q7") final int R7,
            @QueryParam("Q8") final int R8,
            @QueryParam("Q9") final int R9,
            @QueryParam("Q10") final int R10,
            @QueryParam("linkedin") final String linkedin,
            @QueryParam("instagram") final String instagram,
            @QueryParam("facebook") final String facebook,
            @QueryParam("bio") final String bio
    ) {
        int responses[]={R1,R2,R3,R4,R5,R6,R7,R8,R9,R10};
        delegate.createUser(username, password, email,linkedin,facebook,instagram,age,lastname,firstname,bio,responses);
    }
    @POST
    @ApiOperation(value = "Create user")
    @Path("/createuser")
    public void createUser(@QueryParam("username") final String username, @QueryParam("password") final String password, @QueryParam("email") final String email) {
        delegate.createUser(username, password, email);
    }
    @POST
    @ApiOperation(value = "Updating Facebook")
    @Path("/UpdateFacebook")
    public void updateFacebook(@QueryParam("username") final String username, @QueryParam("facebook link") final String Facebook) {
        delegate.updateFacebook(username, Facebook);
    }
    @GET
    @ApiOperation(value = "Update preferences")
    @Path("/updatepreferences")
    public void addUserPrefrences(
            @QueryParam("username") final String username,
            @QueryParam("Q1 Response") int R1,
            @QueryParam("Q2 Response") int R2,
            @QueryParam("Q3 Response") int R3,
            @QueryParam("Q4 Response") int R4,
            @QueryParam("Q5 Response") int R5,
            @QueryParam("Q6 Response") int R6,
            @QueryParam("Q7 Response") int R7,
            @QueryParam("Q8 Response") int R8,
            @QueryParam("Q9 Response") int R9,
            @QueryParam("Q10 Response") int R10) {
        int responses[]={R1,R2,R3,R4,R5,R6,R7,R8,R9,R10};
        delegate.updatePreferences(getUser(username),responses);
    }

    @GET
    @ApiOperation(value = "Get Roommates")
    @Path("/getRoommates")
    public ArrayList<User> getRoommates(@QueryParam("internship") final InternshipInfo internship) {
        return delegate.getRoommates(internship);
    }
}
