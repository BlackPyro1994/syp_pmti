package pmti.fachlogik.grenzklassen;

public class ModulGrenz {
    private String modulid;
    private String modulname;
    private int[] modulkomponenten = new int[3];
    private int[] semesterzuordnung = new int[2];
    private String dozent;
    private int ects;
    private boolean istPflicht;
    private String katalogid;

    public ModulGrenz(String modulid, String modulname, int[] modulkomponenten, int[] semesterzuordnung, String dozent, int ects, boolean istPflicht, String katalogid) {
        this.modulid = modulid;
        this.modulname = modulname;
        this.modulkomponenten = modulkomponenten;
        this.semesterzuordnung = semesterzuordnung;
        this.dozent = dozent;
        this.ects = ects;
        this.istPflicht = istPflicht;
        this.katalogid = katalogid;

    }

    public String getModulid() {
        return modulid;
    }

    public String getModulname() {
        return modulname;
    }

    public int[] getModulkomponenten() {
        return modulkomponenten;
    }

    public int[] getSemesterzuordnung() {
        return semesterzuordnung;
    }

    public String getDozent() {
        return dozent;
    }

    public int getEcts() {
        return ects;
    }

    public boolean getIstPflicht() {
        return istPflicht;
    }

    public String getKatalogid() {
        return katalogid;
    }

}