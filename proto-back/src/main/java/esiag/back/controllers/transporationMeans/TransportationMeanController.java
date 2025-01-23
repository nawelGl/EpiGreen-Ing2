package esiag.back.controllers.transporationMeans;

import esiag.back.dto.RouteDistanceRequest;
import esiag.back.services.transportationMean.TransportationMeanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transportation")
public class TransportationMeanController {

    @Autowired
    private TransportationMeanService transportationMeanService;

    @PostMapping("/calculateCarbonFootprint")
    public ResponseEntity<Double> calculateCarbonFootprint(@RequestBody RouteDistanceRequest request) {
        try {
            double carbonFootprint = transportationMeanService.calculateCarbonFootprint(request.getTransportationType(), request.getDistance(), request.getArea());
            return ResponseEntity.ok(carbonFootprint);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
