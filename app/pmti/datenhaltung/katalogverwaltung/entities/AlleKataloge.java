package pmti.datenhaltung.katalogverwaltung.entities;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class AlleKataloge {

    private ArrayList<Modulkatalog> kataloge = new ArrayList<Modulkatalog>();
    private static AlleKataloge einzigesExemplar;

    private AlleKataloge(){}

    public static AlleKataloge exemplar(){
        if(einzigesExemplar==null){
            einzigesExemplar=new AlleKataloge();
        }
        return einzigesExemplar;
    }

    public List<Modulkatalog> katalogeEinlesen(){

        FileReader fr;
        BufferedReader br;
        String csvZeile;
        Modulkatalog mk;
        int intVar;


        try{
            fr=new FileReader("public/csv/Modulkataloge.csv");
            br = new BufferedReader(fr);

            while(null!=(csvZeile=br.readLine())) {
                mk = new Modulkatalog();
                String[] zeileSegmentieren = csvZeile.split(";");
                mk.setKatalogid(zeileSegmentieren[0]);
                mk.setKatalogname(zeileSegmentieren[1]);
                intVar = Integer.parseInt(zeileSegmentieren[2]);
                mk.setBelegungsanzahl(intVar);

                kataloge.add(mk);
            }

        } catch (IOException e){
            System.out.println("Hinweis für den Administrator: IOException beim Zugriff auf die Datei 'Modulkataloge.csv'!");
        }

        return kataloge;


    }
}