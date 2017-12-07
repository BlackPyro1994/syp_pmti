package pmti.fachlogik.grenzklassen;

public class KatalogGrenz {
    private String katalogid;
    private String katalogname;
    private int belegungsanzahl;


    public KatalogGrenz(String katalogid, String katalogname, int belegungsanzahl){
        this.katalogid = katalogid;
        this.katalogname=katalogname;
        this.belegungsanzahl=belegungsanzahl;
    }

    public String getKatalogid() {
        return katalogid;
    }

    public String getKatalogname() {
        return katalogname;
    }

    public int getBelegungsanzahl() {
        return belegungsanzahl;
    }

}

