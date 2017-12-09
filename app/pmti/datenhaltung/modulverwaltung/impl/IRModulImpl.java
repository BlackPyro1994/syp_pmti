package pmti.datenhaltung.modulverwaltung.impl;

import pmti.datenhaltung.modulverwaltung.entities.AlleModule;
import pmti.datenhaltung.modulverwaltung.entities.Modul;
import pmti.datenhaltung.modulverwaltung.services.IRModul;

import java.util.List;

public class IRModulImpl implements IRModul {
    @Override
    public List<Modul> getAlleModule() {
        AlleModule alleModule = AlleModule.exemplar();

        return alleModule.moduleEinlesen();
    }
}
