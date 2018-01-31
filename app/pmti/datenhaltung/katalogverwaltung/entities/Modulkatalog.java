package pmti.datenhaltung.katalogverwaltung.entities;


/**
 * Entitätsklasse Modulkatalog
 *
 * @author Michael Schott
 *
 */
public class Modulkatalog {
    private String katalogid;
    private String katalogname;
    private int belegungsanzahl;


    public String getKatalogid() {
        return katalogid;
    }

    public String getKatalogname() {
        return katalogname;
    }

    public int getBelegungsanzahl() {
        return belegungsanzahl;
    }

    public void setKatalogid(String katalogid) {
        this.katalogid = katalogid;
    }

    public void setKatalogname(String katalogname) {
        this.katalogname = katalogname;
    }

    public void setBelegungsanzahl(int belegungsanzahl) {
        this.belegungsanzahl = belegungsanzahl;
    }
}

