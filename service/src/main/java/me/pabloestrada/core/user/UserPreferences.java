package me.pabloestrada.core.user;

public final class UserPreferences
{
    private boolean isSmoker;

    public UserPreferences() {
    }

    public boolean isSmoker() {
        return isSmoker;
    }

    public void setSmoker(boolean smoker) {
        isSmoker = smoker;
    }
}
