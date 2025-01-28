package esiag.back.controllers.transporationMeans;

import esiag.back.dto.RouteDistanceRequest;
import esiag.back.services.transportationMean.TransportationMeanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transportationMean")
public class TransportationMeanController {

    @Autowired
    private TransportationMeanService transportationMeanService;

    @PostMapping("/calculateCarbonFootprint")
    public ResponseEntity<Double> calculateCarbonFootprint(@RequestBody RouteDistanceRequest request) {
        try {
            System.out.println("Received request: " + request);
            double carbonFootprint = transportationMeanService.calculateCarbonFootprint(request.getTransportationType(), request.getDistance(), request.getArea());
            System.out.println("Calculated carbon footprint: " + carbonFootprint);
            return ResponseEntity.ok(carbonFootprint);
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
    }

}
