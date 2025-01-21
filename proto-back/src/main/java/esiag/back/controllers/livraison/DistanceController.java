package esiag.back.controllers.livraison;

import esiag.back.dto.DistanceRequestDto;
import esiag.back.services.livraison.DistanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DistanceController {

    @Autowired
    private DistanceService distanceService;
/**
    @PostMapping("/calculate-distance")
    public float calculateDistance(@RequestBody DistanceRequestDto requestDto) {
        Long customerId = requestDto.getCustomerId();
        Long storeId = requestDto.getStoreId();

        return distanceService.calculateDistance(customerId, storeId);
    }
    */
}
