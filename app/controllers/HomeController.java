package controllers;

import play.api.libs.json.Json;
import play.mvc.*;

import pmti.fachlogik.grenzklassen.KatalogGrenz;
import pmti.fachlogik.grenzklassen.ModulGrenz;
import pmti.fachlogik.katalogeloader.impl.IKatalogeLoaderImpl;
import pmti.fachlogik.katalogeloader.services.IKatalogeLoader;
import pmti.fachlogik.moduleloader.impl.IModuleLoaderImpl;
import pmti.fachlogik.moduleloader.services.IModuleLoader;
import views.html.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
        ArrayList<Object[]> katalogListe = new ArrayList<Object[]>();

        // ArrayList a = new ArrayList((new pmti.fachlogik.katalogeloader.impl.IKatalogeLoaderImpl().getKataloge()));

        /*

         for (ModulGrenz mg : (new pmti.fachlogik.moduleloader.impl.IModuleLoaderImpl().getModule()) ) {
            modulListe.add(new Object[]{mg.getModulid(), mg.getModulname()});
        };
        */

        IModuleLoader ml = new IModuleLoaderImpl();
        IKatalogeLoader kl = new IKatalogeLoaderImpl();

        for (ModulGrenz mg : ml.getModule()) {
            modulListe.add(new Object[]{mg.getModulid(), mg.getModulname(), (mg.getModulkomponenten())[0], (mg.getModulkomponenten())[1], (mg.getModulkomponenten())[2], (mg.getModulkomponenten())[3], (mg.getSemesterzuordnung())[0], (mg.getSemesterzuordnung())[1], mg.getDozent(), mg.getEcts(), mg.getIstPflicht(), mg.getKatalogid()});
        }

        for (KatalogGrenz kg : kl.getKataloge()) {
            katalogListe.add(new Object[]{kg.getKatalogid(), kg.getKatalogname(), kg.getBelegungsanzahl()});
        }

        return ok(index.render(request().getHeader("User-Agent"), modulListe, katalogListe));
    }

}
