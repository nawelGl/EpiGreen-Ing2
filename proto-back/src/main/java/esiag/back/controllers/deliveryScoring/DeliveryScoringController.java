package esiag.back.controllers.deliveryScoring;

import esiag.back.services.deliveryScoring.DeliveryScoring;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/delivery-scoring")
public class DeliveryScoringController {

    @Autowired
    private DeliveryScoring deliveryScoring;

    @GetMapping("/score")
    public Character getDeliveryScore(@RequestParam Double carbonFootprint) {
        return deliveryScoring.calculateDeliverysScore(carbonFootprint);
    }

    @GetMapping("/co2")
    public float calculateCo2(@RequestParam float distance, @RequestParam float kgCo2PerKm) {
        return deliveryScoring.calculateCo2(distance, kgCo2PerKm);
    }
}
