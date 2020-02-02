package me.pabloestrada.api;

import com.google.inject.Inject;
import io.swagger.annotations.ApiOperation;
import me.pabloestrada.core.user.User;
import org.bson.types.ObjectId;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;

public class MatchMakingServiceRestMethods {

    private MatchmakingService delegate;

    @Inject
    public MatchMakingServiceRestMethods(final MatchmakingService delegate) {
        this.delegate = delegate;
    }

    @GET
    @ApiOperation(value = "matches")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/matches")
    public List<User> getPotentialMatches(@QueryParam("username") String username, @QueryParam("id") ObjectId internshipId){
        return delegate.getPotentialMatches(username, internshipId);
    }
}
