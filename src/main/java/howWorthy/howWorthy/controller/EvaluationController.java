package howWorthy.howWorthy.controller;
import howWorthy.howWorthy.domain.EvaluationData;
import org.springframework.http.ResponseEntity;
import howWorthy.howWorthy.service.EvaluationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EvaluationController {

    private final EvaluationService evaluationService;

    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @GetMapping("/evaluate/image")
    public ResponseEntity<EvaluationData> getEvaluationData() {
        EvaluationData data = evaluationService.getEvaluationData();
        return ResponseEntity.ok(data);
    }
}