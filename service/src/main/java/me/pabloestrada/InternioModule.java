package me.pabloestrada;

import com.google.inject.AbstractModule;
import io.dropwizard.auth.Auth;
import me.pabloestrada.api.AuthenticationService;
import me.pabloestrada.api.InternioService;
import me.pabloestrada.api.impl.InternioServiceImpl;
import me.pabloestrada.api.impl.authentication.AuthenticationServiceImpl;

public class InternioModule
    extends AbstractModule
{
    @Override
    protected void configure() {
        bind(InternioService.class).to(InternioServiceImpl.class);
        bind(AuthenticationService.class).to(AuthenticationServiceImpl.class);
    }
}
