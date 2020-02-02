package me.pabloestrada;

import com.google.inject.AbstractModule;
import com.google.inject.Singleton;
import io.dropwizard.auth.Auth;
import me.pabloestrada.api.AuthenticationService;
import me.pabloestrada.api.InternioService;
import me.pabloestrada.api.MatchmakingService;
import me.pabloestrada.api.impl.InternioServiceImpl;
import me.pabloestrada.api.impl.MatchingMakingServiceImpl;
import me.pabloestrada.api.impl.authentication.AuthenticationServiceImpl;
import me.pabloestrada.core.neighborhood.NeighborhoodHolder;

public class InternioModule
    extends AbstractModule
{
    @Override
    protected void configure() {
        bind(InternioService.class).to(InternioServiceImpl.class);
        bind(AuthenticationService.class).to(AuthenticationServiceImpl.class);
        bind(MatchmakingService.class).to(MatchingMakingServiceImpl.class);
        bind(NeighborhoodHolder.class).in(Singleton.class);
    }
}
