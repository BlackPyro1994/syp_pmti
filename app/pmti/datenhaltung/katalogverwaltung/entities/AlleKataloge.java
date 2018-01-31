package pmti.datenhaltung.katalogverwaltung.entities;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Objektverwaltung AlleKataloge
 *
 * @author Michael Schott
 *
 */
public class AlleKataloge {

    ArrayList<Modulkatalog> kataloge = new ArrayList<Modulkatalog>();
    private static AlleKataloge einzigesExemplar;


    /**
     * privater Konstruktor
     * es existiert somit kein impliziter oeffentlicher Konstruktor
     *
     * einmaliges Einlesen aus der CSV-Datei
     */
    private AlleKataloge(){
        FileReader fr;
        BufferedReader br;
        String csvZeile;
        Modulkatalog mk;
        int intVar;

        try{
            fr=new FileReader("public/Static_Files/csv/Modulkataloge.csv");
            br = new BufferedReader(fr);

            br.readLine();

            while(null!=(csvZeile=br.readLine())) {
                try{
                    mk = new Modulkatalog();
                    String[] zeileSegmentieren = csvZeile.split(";");
                    mk.setKatalogid(zeileSegmentieren[0]);
                    mk.setKatalogname(zeileSegmentieren[1]);
                    intVar = Integer.parseInt(zeileSegmentieren[2]);
                    mk.setBelegungsanzahl(intVar);

                    kataloge.add(mk);

                } catch (Exception e) {
                    System.err.println("Hinweis fuer den Administrator: Es gab eine Exception beim Lesen der Daten aus der Datei 'Modulkataloge.csv': "+e.getClass().getName()+": "+e.getMessage());
                }
            }

        } catch (IOException e){
            System.err.println("Hinweis fuer den Administrator: Es gab eine IOException beim Zugriff auf die Datei 'Modulkataloge.csv': "+e.getClass().getName()+": "+e.getMessage());
        }
    }

    /**
     * Methode mit Lazy initialization zum Erzeugen einer einzigen Instanz von AlleKataloge
     *
     * @return einzige Instanz von AlleKataloge
     */
    public static AlleKataloge exemplar(){
        if(einzigesExemplar==null){
            einzigesExemplar=new AlleKataloge();
        }
        return einzigesExemplar;
    }

    /**
     * Methode zum Uebergeben eines einzigen Exemplars der Liste aller Modulkataloge
     *
     * @return List mit Modulkatalog-Objekten zu allen Modulkatalogen
     */
    public List<Modulkatalog> katalogeRueckgabe(){

        return kataloge;

    }
}
