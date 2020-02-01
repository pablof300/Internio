package me.pabloestrada.core.user;


public final class UserPrefrences
{


    private int [] questionResponses = new int[10];

    public UserPrefrences() {
    }

    public UserPrefrences(int [] questionResponses) {
        this.questionResponses = questionResponses;
    }
    public int[] getAllQuestionResponses() {
        return questionResponses;
    }

    public void setAllQuestionResponses(int[] questionResponses) {
        this.questionResponses = questionResponses;
    }
    public int getAQuestionResponses(int questionNum) {
        return questionResponses[questionNum];
    }

    public void setAQuestionResponses(int questionNum , int questionResponse) {
        questionResponses[questionNum]= questionResponse;
    }
}