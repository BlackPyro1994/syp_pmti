package pmti.datenhaltung.modulverwaltung.impl;

import pmti.datenhaltung.db.entities.AlleModule;
import pmti.datenhaltung.db.entities.Modul;
import pmti.datenhaltung.modulverwaltung.services.IRModul;

import java.util.List;

public class IRModulImpl implements IRModul {
    @Override
    public List<Modul> readModulFile() {
        AlleModule alleModule = AlleModule.exemplar();

        return alleModule.moduleEinlesen();
    }
}
