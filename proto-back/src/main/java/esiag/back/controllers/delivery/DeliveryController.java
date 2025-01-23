package esiag.back.controllers.delivery;

import esiag.back.models.delivery.Delivery;
import esiag.back.services.delivery.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

}
