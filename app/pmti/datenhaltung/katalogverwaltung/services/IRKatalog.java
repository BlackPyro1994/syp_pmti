package pmti.datenhaltung.katalogverwaltung.services;

import pmti.datenhaltung.katalogverwaltung.entities.Modulkatalog;

import java.util.List;

/**
 * Interface IRKatalog der Klasse IRKatalogImpl
 *
 * @author Michael Schott
 *
 */
public interface IRKatalog {
    public List<Modulkatalog> getAlleKataloge();
}
