package me.pabloestrada.core.user;

import org.bson.types.ObjectId;

import java.util.Objects;

public final class User
{
    private String username;
    private String password;
    private ObjectId id;
    private InternshipInfo internship;
    private UserSettings settings;
    private UserPrefrences prefrences;
    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(String username, String password, boolean generateId) {
        this.username = username;
        this.password = password;
        this.id = new ObjectId();
        this.settings= new UserSettings();
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

    public InternshipInfo getInternshipInfo() {
        return internship;
    }

    public void setInternshipInfo(InternshipInfo internship) {
        this.internship = internship;
    }

    public UserSettings getUserSettings() {
        return settings;
    }

    public void getUserSettings(UserSettings settings) {
        this.settings = settings;
    }

    public UserPrefrences getUserPrefrences() {
        return prefrences;
    }

    public void setUserPrefrences(UserPrefrences prefrences) {
        this.prefrences = prefrences;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username) &&
                Objects.equals(password, user.password) &&
                Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, password, id);
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", id=" + id +
                '}';
    }
}
