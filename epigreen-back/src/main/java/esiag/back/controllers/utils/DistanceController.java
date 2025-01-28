package esiag.back.controllers.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import esiag.back.services.utils.DistanceCalculator;

@RestController
@RequestMapping("/api")
public class DistanceController {

    @PostMapping("/calculateDistance")
    public ResponseEntity<Map<String, Double>> calculateDistance(@RequestBody Map<String, double[]> points) {
        double[] point1 = points.get("point1");
        double[] point2 = points.get("point2");

        if (point1 == null || point2 == null || point1.length != 2 || point2.length != 2) {
            return ResponseEntity.badRequest().build();
        }

        double distance = DistanceCalculator.calculateDistance(point1, point2);

        Map<String, Double> response = new HashMap<>();
        response.put("distance", distance);
        return ResponseEntity.ok(response);
    }
}

