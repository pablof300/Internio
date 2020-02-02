package me.pabloestrada.core.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import me.pabloestrada.core.internship.InternshipInfo;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public final class User
{
    @JsonProperty(required = true)
    private String username;

    @JsonProperty(required = true)
    private String password;

    @JsonProperty(required = true)
    private String email;

    @JsonProperty(required = true)
    private ObjectId id;

    @JsonProperty(required = true)
    private List<InternshipInfo> internships;

    @JsonProperty(required = true)
    private UserSettings settings;


    @JsonProperty(required = true)
    private UserPreferences preferences;

    @JsonProperty(required = true)
    private String linkedin;

    @JsonProperty(required = true)
    private String facebook;

    @JsonProperty(required = true)
    private String instagram;

    @JsonProperty(required = true)
    private int age;

    @JsonProperty(required = true)
    private String nameLast;

    @JsonProperty(required = true)
    private String nameFirst;

    @JsonProperty(required = true)
    private String bio;

    public User() {
    }

    public User(String username, String password, String email) {
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

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getFacebook() {
        return facebook;
    }

   public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getNameLast() {
        return nameLast;
    }

    public void setNameLast(String nameLast) {
        this.nameLast = nameLast;
    }

    public String getNameFirst() {
        return nameFirst;
    }

    public void setNameFirst(String nameFirst) {
        this.nameFirst = nameFirst;
    }
}