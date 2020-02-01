package me.pabloestrada.api;

import com.google.inject.Inject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import me.pabloestrada.core.internship.InternshipInfo;
import me.pabloestrada.core.user.User;
import java.util.Date;
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
      @QueryParam("startDate") final Date startDate,
      @QueryParam("endDate") final Date endDate,
      @QueryParam("company") final String company,
      @QueryParam("username") final String username ) {

        //username is unique, query it in DB to find the specific User
        // use the User object that we find, and use the add method (we will make) within User class to modify our InternshipInfo

        delegate.addInternship(delegate.getUser(username), locationCity, locationState, startDate, endDate, company);
    }


    @GET
    @ApiOperation(value = "load data")
    @Path("/data")
    public void loadData() {
        delegate.loadData();
    }

    @GET
    @ApiOperation(value = "Create user")
    @Path("/createuser")
    public void createUser(@QueryParam("username") final String username, @QueryParam("password") final String password, @QueryParam("email") final String email) {
        delegate.createUser(username, password, email);
    }
}
