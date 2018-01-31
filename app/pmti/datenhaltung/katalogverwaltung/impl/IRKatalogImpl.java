package pmti.datenhaltung.katalogverwaltung.impl;

import pmti.datenhaltung.katalogverwaltung.entities.AlleKataloge;
import pmti.datenhaltung.katalogverwaltung.entities.Modulkatalog;
import pmti.datenhaltung.katalogverwaltung.services.IRKatalog;

import java.util.List;

/**
 * IRKatalogImpl
 * implementiert Interface IRKatalog
 *
 * @author Michael Schott
 *
 */
public class IRKatalogImpl implements IRKatalog {

    /**
     * Methode zum Übergeben der Liste aller Modulkataloge an die Fachlogik
     *
     * @return List mit Modulkatalog-Objekten zu allen Modulkatalogen
     */
    @Override
    public List<Modulkatalog> getAlleKataloge() {
        AlleKataloge alleKataloge = AlleKataloge.exemplar();

        return alleKataloge.katalogeRueckgabe();

    }
}
