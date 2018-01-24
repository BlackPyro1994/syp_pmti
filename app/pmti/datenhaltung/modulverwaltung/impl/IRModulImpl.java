package pmti.datenhaltung.modulverwaltung.impl;

import pmti.datenhaltung.modulverwaltung.entities.AlleModule;
import pmti.datenhaltung.modulverwaltung.entities.Modul;
import pmti.datenhaltung.modulverwaltung.services.IRModul;

import java.util.List;

public class IRModulImpl implements IRModul {

    /**
     * Methode zum Übergeben der Liste aller Module an die Fachlogik
     *
     * @return List mit Modul-Objekten zu allen Modulen
     */
    @Override
    public List<Modul> getAlleModule() {
        AlleModule alleModule = AlleModule.exemplar();

        return alleModule.moduleRueckgabe();
    }
}
