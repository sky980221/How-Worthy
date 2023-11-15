package howWorthy.howWorthy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EvaluationController {

    @PostMapping("/evaluate_image") // POST 요청으로 변경
    public ResponseEntity<String> forwardJsonToReact(@RequestBody String jsonInput) {
        // 받은 JSON 데이터를 그대로 리액트에 전달
        return ResponseEntity.ok(jsonInput);
    }
}