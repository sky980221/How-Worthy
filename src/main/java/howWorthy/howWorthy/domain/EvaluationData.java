package howWorthy.howWorthy.domain;
import java.util.List;

public class EvaluationData {
    private List<String> feedback;
    private List<Integer> score;

    // 게터와 세터
    public List<String> getFeedback() {
        return feedback;
    }

    public void setFeedback(List<String> feedback) {
        this.feedback = feedback;
    }

    public List<Integer> getScore() {
        return score;
    }

    public void setScore(List<Integer> score) {
        this.score = score;
    }
}
