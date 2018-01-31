package pmti.fachlogik.moduleloader.services;

import pmti.fachlogik.grenzklassen.ModulGrenz;

import java.util.List;

/**
 * Interface IModuleLoader der Klasse IModuleLoaderImpl
 *
 * @author Michael Schott
 *
 */
public interface IModuleLoader {
        public List<ModulGrenz> getModule();
}
