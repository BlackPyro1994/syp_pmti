package pmti.fachlogik.katalogeloader.impl;

import pmti.datenhaltung.db.entities.Modulkatalog;
import pmti.datenhaltung.katalogverwaltung.impl.IRKatalogImpl;
import pmti.datenhaltung.katalogverwaltung.services.IRKatalog;
import pmti.fachlogik.grenzklassen.KatalogGrenz;
import pmti.fachlogik.katalogeloader.services.IKatalogeLoader;

import java.util.ArrayList;
import java.util.List;

public class IKatalogeLoaderImpl implements IKatalogeLoader {
    private final IRKatalog kataloge;

    public IKatalogeLoaderImpl(){
        kataloge = new IRKatalogImpl();
    }


    @Override
    public List<KatalogGrenz> getKataloge() {
        ArrayList<KatalogGrenz> rueckgabe = new ArrayList<>();

        List<Modulkatalog> alleKataloge = kataloge.getAlleKataloge();

        for(Modulkatalog mk : alleKataloge){

            KatalogGrenz mkg = new KatalogGrenz(mk.getKatalogid(), mk.getKatalogname(), mk.getBelegungsanzahl());
            rueckgabe.add(mkg);
        }


        return rueckgabe;
    }
}
