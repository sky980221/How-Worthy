package howWorthy.howWorthy.service;

import howWorthy.howWorthy.domain.EvaluationData;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class EvaluationService {

    private final RestTemplate restTemplate;

    public EvaluationService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public EvaluationData getEvaluationData() {
        String url = "http://3.35.110.165:5000/evaluate/image";
        EvaluationData data = restTemplate.getForObject(url, EvaluationData.class);
        return data;
    }
}