package pmti.datenhaltung.modulverwaltung.entities;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class AlleModule {
    private ArrayList<Modul> module = new ArrayList<>();
    private static AlleModule einzigesExemplar;

    private AlleModule(){}

    public static AlleModule exemplar(){
        if(einzigesExemplar==null){
            einzigesExemplar=new AlleModule();
        }
        return einzigesExemplar;
    }

    public List<Modul> moduleEinlesen(){
        FileReader fr;
        BufferedReader br;
        String csvZeile;
        Modul m;
        int intVar;
        int[] intArr4;
        int[] intArr2;


        try{
            fr=new FileReader("public/csv/Module.cvs");
            br = new BufferedReader(fr);

            while(null!=(csvZeile=br.readLine())) {
                m = new Modul();
                intArr4 = new int[4];
                intArr2 = new int[2];
                String[] zeileSegmentieren = csvZeile.split(";");

                m.setModulid(zeileSegmentieren[0]);
                m.setModulname(zeileSegmentieren[1]);
                intArr4[0] = Integer.parseInt(zeileSegmentieren[2]);
                intArr4[1] = Integer.parseInt(zeileSegmentieren[3]);
                intArr4[2] = Integer.parseInt(zeileSegmentieren[4]);
                intArr4[3] = Integer.parseInt(zeileSegmentieren[5]);
                m.setModulkomponenten(intArr4);
                intArr2[0] = Integer.parseInt(zeileSegmentieren[6]);
                intArr2[1] = Integer.parseInt(zeileSegmentieren[7]);
                m.setSemesterzuordnung(intArr2);
                m.setDozent(zeileSegmentieren[8]);
                intVar = Integer.parseInt(zeileSegmentieren[9]);
                m.setEcts(intVar);
                m.setIstPflicht(Boolean.valueOf(zeileSegmentieren[10]));
                m.setKatalogid(zeileSegmentieren[11]);

                module.add(m);
            }
        } catch (IOException e){}

        return module;


    }
}
