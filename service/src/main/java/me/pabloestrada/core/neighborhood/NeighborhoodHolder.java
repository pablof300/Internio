package me.pabloestrada.core.neighborhood;

import java.util.ArrayList;
import java.util.HashMap;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public final class NeighborhoodHolder {

    private ArrayList<Neighborhood> allNeighborhoods;
    private HashMap<String, ArrayList<Neighborhood>> neighborhoodsByCity;
    private String cvsFile = "src/main/java/me/pabloestrada/core/neighborhood/Neighborhood_InventoryMeasure_Neighborhood_Public.csv";

    public NeighborhoodHolder() {
        try(BufferedReader read = new BufferedReader(new FileReader(cvsFile))) {
            String temp = "";
            while((temp = read.readLine()) != null) {
                String[] neighborhoodInfo = temp.split(",");
                allNeighborhoods.add(new Neighborhood(neighborhoodInfo));
            }
        } catch(IOException e) {
            
        }
        buildMap();
    }

    public static void main(String[] args) {

    }

    private void buildMap() {
        for(int i = 0; i < allNeighborhoods.size(); i++)
        {
            if(neighborhoodsByCity.containsKey(allNeighborhoods.get(i).getCity())) {
                neighborhoodsByCity.get(allNeighborhoods.get(i).getCity()).add(allNeighborhoods.get(i));
            }
            else {
                neighborhoodsByCity.put(allNeighborhoods.get(i).getCity(), new ArrayList<Neighborhood>());
                neighborhoodsByCity.get(allNeighborhoods.get(i).getCity()).add(allNeighborhoods.get(i));
            }
        }
    }
}