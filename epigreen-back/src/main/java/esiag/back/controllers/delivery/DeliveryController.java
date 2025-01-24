package esiag.back.controllers.delivery;

import esiag.back.models.delivery.Delivery;
import esiag.back.services.delivery.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("delivery")
public class DeliveryController {

    @Autowired
    private DeliveryService deliveryService;

    @GetMapping("/{id}")
    public ResponseEntity<Delivery> findByIdDelivery(@PathVariable Long id){
        return new ResponseEntity<>(deliveryService.findByIdDelivery(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<Delivery>> findAllDelivery(){
        return new ResponseEntity<>(deliveryService.findAllDelivery(), HttpStatus.OK);
    }

    @PostMapping("update_method")
    public ResponseEntity<Delivery> updateDeliveryMethod(@RequestBody Delivery delivery){
        boolean isUpdated = deliveryService.updateDeliveryMethod(delivery);
        if(!isUpdated){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(delivery, HttpStatus.OK);
    }

}
