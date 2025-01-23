package esiag.back.controllers.store;

import esiag.back.models.store.Store;
import esiag.back.services.store.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("store")
public class StoreController{

    @Autowired
    private StoreService storeService;
    @GetMapping("/{id}")
    public ResponseEntity<Store> findByIdStore(@PathVariable Long id){
        return new ResponseEntity<>(storeService.findByIdStore(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<Store>> findAllStore(){
        return new ResponseEntity<>(storeService.findAllStore(), HttpStatus.OK);
    }
}