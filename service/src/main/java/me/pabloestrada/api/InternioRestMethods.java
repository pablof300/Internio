package me.pabloestrada.api;

import com.google.inject.Inject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import me.pabloestrada.core.user.User;

import javax.ws.rs.GET;
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


    @GET
    @ApiOperation(value = "load data")
    @Path("/data")
    public void loadData() {
        delegate.loadData();
    }
}
