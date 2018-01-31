package pmti.fachlogik.katalogeloader.impl;

import pmti.datenhaltung.katalogverwaltung.entities.Modulkatalog;
import pmti.datenhaltung.katalogverwaltung.impl.IRKatalogImpl;
import pmti.datenhaltung.katalogverwaltung.services.IRKatalog;
import pmti.fachlogik.grenzklassen.KatalogGrenz;
import pmti.fachlogik.katalogeloader.services.IKatalogeLoader;

import java.util.ArrayList;
import java.util.List;

/**
 * Steuerungsklasse IKatalogeLoaderImpl
 * implementiert Interface IKatalogeLoader
 *
 * @author Michael Schott
 *
 */
public class IKatalogeLoaderImpl implements IKatalogeLoader {
    private final IRKatalog kataloge;

    public IKatalogeLoaderImpl(){
        kataloge = new IRKatalogImpl();
    }

    /**
     * Methode zum Uebergeben der Liste aller Modulkataloge an die WebGUI
     *
     * @return ArrayList mit KatalogGrenz-Objekten zu allen Modulkatalogen
     */
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
