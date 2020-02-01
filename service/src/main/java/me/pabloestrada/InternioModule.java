package me.pabloestrada;

import com.google.inject.AbstractModule;
import me.pabloestrada.api.InternioService;
import me.pabloestrada.api.impl.InternioServiceImpl;

public class InternioModule
    extends AbstractModule
{
    @Override
    protected void configure() {
        bind(InternioService.class).to(InternioServiceImpl.class);
    }
}
