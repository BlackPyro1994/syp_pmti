package controllers;

import play.api.libs.json.Json;
import play.mvc.*;

import pmti.fachlogik.grenzklassen.KatalogGrenz;
import pmti.fachlogik.grenzklassen.ModulGrenz;
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

        // ArrayList a = new ArrayList((new pmti.fachlogik.katalogeloader.impl.IKatalogeLoaderImpl().getKataloge()));

/*        for (int i = 0; i < a.size(); i++) {
            System.out.println((ModulGrenz)(a.get(i))));

            modulListe.add(new Object[]{, "Modul Alpha"});
        }*/


        for (ModulGrenz mg : (new pmti.fachlogik.moduleloader.impl.IModuleLoaderImpl().getModule())) {
           //  System.out.println("modulid: "+mg.getModulid()+" modulname: "+mg.getModulname()+" modulkomponenten: "+(mg.getModulkomponenten())[0]+(mg.getModulkomponenten())[1]+(mg.getModulkomponenten())[2]+(mg.getModulkomponenten())[3]+" semesterzuordnung: "+(mg.getSemesterzuordnung())[0]+(mg.getSemesterzuordnung())[1]+" dozent: "+mg.getDozent()+" ects: "+mg.getEcts()+" istPflicht: "+ mg.getIstPflicht() + " katalogid: "+mg.getKatalogid());

            // System.out.println("modulid: "+mg.getModulid()+" modulname: "+mg.getModulname()+" modulkomponenten: "+(mg.getModulkomponenten())[0]+(mg.getModulkomponenten())[1]+(mg.getModulkomponenten())[2]+(mg.getModulkomponenten())[3]+" semesterzuordnung: "+(mg.getSemesterzuordnung())[0]+(mg.getSemesterzuordnung())[1]+" dozent: "+mg.getDozent()+" ects: "+mg.getEcts()+" istPflicht: "+ mg.getIstPflicht() + " katalogid: "+mg.getKatalogid());
            modulListe.add(new Object[]{mg.getModulid(), mg.getModulname()});
        };

        /*for (KatalogGrenz kg : alleKataloge) {
            //System.out.println(kg.getKatalogid()+" "+kg.getKatalogname() + " "+kg.getBelegungsanzahl());
        }*/

        modulListe.add(new Object[]{8, "Modul Beta"});
        modulListe.add(new Object[]{9, "Modul Gamma"});
        modulListe.add(new Object[]{10, "Modul Delta"});
        modulListe.add(new Object[]{11, "Modul Epsilon"});

        return ok(index.render(request().getHeader("User-Agent"), modulListe));
    }

}
