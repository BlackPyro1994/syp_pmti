package pmti.datenhaltung.katalogverwaltung.impl;

import pmti.datenhaltung.db.entities.AlleKataloge;
import pmti.datenhaltung.db.entities.Modulkatalog;
import pmti.datenhaltung.katalogverwaltung.services.IRKatalog;

import java.util.List;

public class IRKatalogImpl implements IRKatalog {
    @Override
    public List<Modulkatalog> getAlleKataloge() {
        AlleKataloge alleKataloge = AlleKataloge.exemplar();

        return alleKataloge.katalogeEinlesen();

    }
}
