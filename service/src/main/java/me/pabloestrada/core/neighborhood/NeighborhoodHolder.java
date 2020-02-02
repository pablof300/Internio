package me.pabloestrada.core.neighborhood;

import java.util.ArrayList;
import java.util.HashMap;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public final class NeighborhoodHolder {

    private ArrayList<Neighborhood> allNeighborhoods = new ArrayList<>();
    private HashMap<String, ArrayList<Neighborhood>> neighborhoodsByCity = new HashMap<>();
    private String cvsFile = "src/main/java/me/pabloestrada/core/neighborhood/Neighborhood_InventoryMeasure_Neighborhood_Public.csv";

    public NeighborhoodHolder() {
        try(BufferedReader read = new BufferedReader(new FileReader(cvsFile))) {
            String temp = read.readLine();
            while((temp = read.readLine()) != null) {
                temp = temp.replace("\"", "").toLowerCase();
                String[] neighborhoodInfo = temp.split(",");
                allNeighborhoods.add(new Neighborhood(neighborhoodInfo));
            }
        } catch(IOException e) {
            
        }
        buildMap();
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

    public ArrayList<Neighborhood> getAllNeighborhoods() {
        return allNeighborhoods;
    }

    public void setAllNeighborhoods(ArrayList<Neighborhood> allNeighborhoods) {
        this.allNeighborhoods = allNeighborhoods;
    }

    public HashMap<String, ArrayList<Neighborhood>> getNeighborhoodsByCity() {
        return neighborhoodsByCity;
    }

    public void setNeighborhoodsByCity(HashMap<String, ArrayList<Neighborhood>> neighborhoodsByCity) {
        this.neighborhoodsByCity = neighborhoodsByCity;
    }

    public String getCvsFile() {
        return cvsFile;
    }

    public void setCvsFile(String cvsFile) {
        this.cvsFile = cvsFile;
    }
}