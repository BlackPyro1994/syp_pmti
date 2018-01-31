package pmti.fachlogik.katalogeloader.services;

import pmti.fachlogik.grenzklassen.KatalogGrenz;

import java.util.List;

/**
 * Interface IKatalogeLoader der Klasse IKatalogeLoaderImpl
 *
 * @author Michael Schott
 *
 */
public interface IKatalogeLoader {
    public List<KatalogGrenz> getKataloge();
}
