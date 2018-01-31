package pmti.datenhaltung.modulverwaltung.entities;

/**
 * Entitätsklasse Modul
 *
 * @author Michael Schott
 *
 */
public class Modul {
    private String modulid;
    private String modulname;
    private int[] modulkomponenten = new int[3];
    private int[] semesterzuordnung = new int[2];
    private String dozent;
    private int ects;
    private boolean istPflicht;
    private String katalogid;


    public String getModulid() {
        return modulid;
    }

    public void setModulid(String modulid) {
        this.modulid = modulid;
    }

    public String getModulname() {
        return modulname;
    }

    public void setModulname(String modulname) {
        this.modulname = modulname;
    }

    public int[] getModulkomponenten() {
        return modulkomponenten;
    }

    public void setModulkomponenten(int[] modulkomponenten) {
        this.modulkomponenten = modulkomponenten;
    }

    public int[] getSemesterzuordnung() {
        return semesterzuordnung;
    }

    public void setSemesterzuordnung(int[] semesterzuordnung) {
        this.semesterzuordnung = semesterzuordnung;
    }

    public String getDozent() {
        return dozent;
    }

    public void setDozent(String dozent) {
        this.dozent = dozent;
    }

    public int getEcts() {
        return ects;
    }

    public void setEcts(int ects) {
        this.ects = ects;
    }

    public boolean getIstPflicht() {
        return istPflicht;
    }

    public void setIstPflicht(boolean istPflicht) {
        this.istPflicht = istPflicht;
    }

    public String getKatalogid() {
        return katalogid;
    }

    public void setKatalogid(String katalogid) {
        this.katalogid = katalogid;
    }

}