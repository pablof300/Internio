package me.pabloestrada;

import com.google.inject.Guice;
import com.google.inject.Injector;
import io.dropwizard.Application;
import io.dropwizard.jersey.filter.AllowedMethodsFilter;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.federecio.dropwizard.swagger.SwaggerBundle;
import io.federecio.dropwizard.swagger.SwaggerBundleConfiguration;
import me.pabloestrada.api.AuthenticationServiceRestMethods;
import me.pabloestrada.api.InternioRestMethods;
import me.pabloestrada.api.MatchMakingServiceRestMethods;
import me.pabloestrada.api.impl.authentication.AuthenticationServiceImpl;
import me.pabloestrada.core.neighborhood.NeighborhoodHolder;
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

public class InternioApplication
    extends Application<InternioConfiguration>
{
    public static void main(final String[] args) throws Exception {
        new InternioApplication().run(args);
    }

    @Override
    public void initialize(final Bootstrap<InternioConfiguration> bootstrap) {
        bootstrap.addBundle(new SwaggerBundle<InternioConfiguration>() {
            @Override
            protected SwaggerBundleConfiguration getSwaggerBundleConfiguration(final InternioConfiguration configuration)
            {
                return configuration.swaggerBundleConfiguration;
            }
        });
    }

    @Override
    public void run(final InternioConfiguration configuration, final Environment environment) {
        final FilterRegistration.Dynamic cors = environment.servlets()
                .addFilter("CORSFilter", CrossOriginFilter.class);

        cors.addMappingForUrlPatterns(
                EnumSet.allOf(DispatcherType.class), false, environment.getApplicationContext().getContextPath() + "*");
        cors.setInitParameter(AllowedMethodsFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,HEAD,OPTIONS");
        cors.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        cors.setInitParameter(CrossOriginFilter.ALLOWED_HEADERS_PARAM, "*");
        cors.setInitParameter(CrossOriginFilter.EXPOSED_HEADERS_PARAM, "Link");
        cors.setInitParameter(CrossOriginFilter.ALLOW_CREDENTIALS_PARAM, "true");

        final Injector injector = Guice.createInjector(new InternioModule());
        final InternioRestMethods api = injector.getInstance(InternioRestMethods.class);
        final AuthenticationServiceRestMethods auth = injector.getInstance(AuthenticationServiceRestMethods.class);
        final MatchMakingServiceRestMethods match = injector.getInstance(MatchMakingServiceRestMethods.class);

        environment.jersey().register(api);
        environment.jersey().register(auth);
        environment.jersey().register(match);
    }

    @Override
    public String getName() {
        return "Hello Pablo :)";
    }
}
