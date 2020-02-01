package me.pabloestrada.core.user;

public final class UserSettings
{
    private int dateFlexibilityRangeInDays;

    public UserSettings() {
    }

    public int getDateFlexibilityRangeInDays() {
        return dateFlexibilityRangeInDays;
    }

    public void setDateFlexibilityRangeInDays(int dateFlexibilityRangeInDays) {
        this.dateFlexibilityRangeInDays = dateFlexibilityRangeInDays;
    }
}
