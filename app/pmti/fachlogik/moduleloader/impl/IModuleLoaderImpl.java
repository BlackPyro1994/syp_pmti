package pmti.fachlogik.moduleloader.impl;

import pmti.datenhaltung.modulverwaltung.entities.Modul;
import pmti.datenhaltung.modulverwaltung.impl.IRModulImpl;
import pmti.datenhaltung.modulverwaltung.services.IRModul;
import pmti.fachlogik.grenzklassen.ModulGrenz;
import pmti.fachlogik.moduleloader.services.IModuleLoader;

import java.util.ArrayList;
import java.util.List;

/**
 * Steuerungsklasse IModuleLoaderImpl
 * implementiert Interface IModuleLoader
 *
 * @author Michael Schott
 *
 */
public class IModuleLoaderImpl implements IModuleLoader {
    private final IRModul module;

    public IModuleLoaderImpl(){
        module = new IRModulImpl();
    }

    /**
     * Methode zum Übergeben der Liste aller Module an die WebGUI
     *
     * @return ArrayList mit ModulGrenz-Objekten zu allen Modulen
     */
    @Override
    public List<ModulGrenz> getModule() {
        ArrayList<ModulGrenz> rueckgabe = new ArrayList<>();

        List<Modul> alleModule = module.getAlleModule();

        for(Modul m : alleModule){

            ModulGrenz mg = new ModulGrenz(m.getModulid(), m.getModulname(), m.getModulkomponenten(), m.getSemesterzuordnung(), m.getDozent(), m.getEcts(), m.getIstPflicht(), m.getKatalogid());
            rueckgabe.add(mg);
        }

        return rueckgabe;
    }
}
