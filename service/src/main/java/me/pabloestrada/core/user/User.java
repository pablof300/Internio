package me.pabloestrada.core.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import me.pabloestrada.core.internship.InternshipInfo;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public final class User
{
    @JsonProperty(required = true)
    private String username;

    @JsonProperty(required = true)
    private String password;

    @JsonProperty(required = true)
    private ObjectId id;

    @JsonProperty(required = true)
    private List<InternshipInfo> internships;

    @JsonProperty(required = true)
    private UserSettings settings;

    @JsonProperty(required = true)
    private UserPreferences preferences;
    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.id = new ObjectId();
        this.settings= new UserSettings();
        this.internships = new ArrayList<>();
        this.preferences = new UserPreferences();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public List<InternshipInfo> getInternships() {
        return internships;
    }

    public InternshipInfo getInternshipInfo(ObjectId internshipId){
        for(int i=0; i<internships.size();i++){
          if( internships.get(i).getId().equals(internshipId)) {
              return internships.get(i);
          }
        }
        return null;
    }

    public void setInternships(List<InternshipInfo> internships) {
        this.internships = internships;
    }

    public UserSettings getSettings() {
        return settings;
    }

    public void setSettings(UserSettings settings) {
        this.settings = settings;
    }

    public UserPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(UserPreferences preferences) {
        this.preferences = preferences;
    }
}
