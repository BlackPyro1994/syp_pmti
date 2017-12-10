package controllers;

import play.api.libs.json.Json;
import play.mvc.*;

import views.html.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {

        ArrayList<Object[]> modulListe = new ArrayList<Object[]>();

        modulListe.add(new Object[]{7,"Modul Alpha"});
        modulListe.add(new Object[]{8,"Modul Beta"});
        modulListe.add(new Object[]{9,"Modul Gamma"});
        modulListe.add(new Object[]{10,"Modul Delta"});
        modulListe.add(new Object[]{11,"Modul Epsilon"});

        // String[] userAgent = request().headers().get(Http.HeaderNames.USER_AGENT);

        String userAgent = request().getHeader("User-Agent");

        String[] arr = new String[]{"abc", "abc2"};

        // return ok(index.render("asdasd"));

        return ok(index.render(userAgent, modulListe));
    }

}
