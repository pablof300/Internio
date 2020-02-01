package me.pabloestrada.core.user;

public final class UserPreferences
{
    private int [] questionResponses = new int[10];
    public UserPreferences() {
    }

    public UserPreferences(int [] questionResponses) {
        this.questionResponses = questionResponses;
    }

    public int[] getQuestionResponses() {
        return questionResponses;
    }

    public void setQuestionResponses(int[] questionResponses) {
        this.questionResponses = questionResponses;
    }



}