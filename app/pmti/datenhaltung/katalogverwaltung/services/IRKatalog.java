package pmti.datenhaltung.katalogverwaltung.services;

import pmti.datenhaltung.db.entities.Modulkatalog;

import java.util.List;

public interface IRKatalog {
    public List<Modulkatalog> readKatalogFile();
}
