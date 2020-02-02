package me.pabloestrada.core.user;

import java.util.ArrayList;
import java.util.List;

public final class UserPreferences
{
    private List<Integer> questionResponses;

    public UserPreferences() {
    }

    public UserPreferences(boolean init) {
        questionResponses = new ArrayList<>();
    }

    public UserPreferences(int[] responses) {
        System.out.println();
        if (questionResponses == null) {
            questionResponses = new ArrayList<>();
        }
        for (int i : responses) {
            this.questionResponses.add(i);
        }
    }

    public List<Integer> getQuestionResponses() {
        return questionResponses;
    }

    public void setQuestionResponses(List<Integer> questionResponses) {
        this.questionResponses = questionResponses;
    }

    public int getAQuestionResponses(int questionNum) {
        return questionResponses.get(questionNum);
    }

    public void setAQuestionResponses(int questionNum , int questionResponse) {
        questionResponses.set(questionNum, questionResponse);
    }
}