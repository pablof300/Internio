package me.pabloestrada.core.user;

import org.bson.types.ObjectId;

import java.util.Objects;

public final class UserPreferences
{
    private String username;
    private String password;
    private ObjectId id;

    public UserPreferences() {
    }

    public UserPreferences(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public UserPreferences(String username, String password, boolean generateId) {
        this.username = username;
        this.password = password;
        this.id = new ObjectId();
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
}