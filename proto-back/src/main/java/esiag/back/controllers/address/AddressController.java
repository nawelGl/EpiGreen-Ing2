package esiag.back.controllers.address;

import esiag.back.models.address.Address;
import esiag.back.models.customer.Customer;
import esiag.back.services.address.AddressService;
import esiag.back.services.customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("address")
public class AddressController {

    @Autowired
    private AddressService addressService;
    @GetMapping("/{id}")
    public ResponseEntity<Address> findByIdAddress(@PathVariable Long id){
        return new ResponseEntity<>(addressService.findByIdAddress(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<Address>> findAllAddress(){
        return new ResponseEntity<>(addressService.findAllAddress(), HttpStatus.OK);
    }

}
