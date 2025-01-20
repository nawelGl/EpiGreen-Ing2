package esiag.back.controllers.transportation;

import esiag.back.models.customer.Customer;
import esiag.back.models.transportation.Transportation;
import esiag.back.services.customer.CustomerService;
import esiag.back.services.transportation.TransportationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("transportation")
public class TransportationController {
    @Autowired
    private TransportationService transportationService;
    @GetMapping("/{id}")
    public ResponseEntity<Transportation> findByIdTransportation(@PathVariable Long id){
        return new ResponseEntity<>(transportationService.findByIdTransportation(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<Transportation>> findAllTransportation(){
        return new ResponseEntity<>(transportationService.findAllTransportation(), HttpStatus.OK);
    }
}
