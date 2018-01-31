package pmti.datenhaltung.modulverwaltung.services;

import pmti.datenhaltung.modulverwaltung.entities.Modul;

import java.util.List;

/**
 * Interface IRModul der Klasse IRModulImpl
 *
 * @author Michael Schott
 *
 */
public interface IRModul {
   public List<Modul> getAlleModule();
}
