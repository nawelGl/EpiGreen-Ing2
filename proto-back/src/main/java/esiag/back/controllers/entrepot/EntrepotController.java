package esiag.back.controllers.entrepot;

import esiag.back.models.entrepot.Entrepot;
import esiag.back.services.entrepot.EntrepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("entrepot")
public class EntrepotController {

    @Autowired
    private EntrepotService entrepotService;
    @GetMapping("/{id}")
    public ResponseEntity<Entrepot> findByIdEntrepot(@PathVariable Long id){
        return new ResponseEntity<>(entrepotService.findByIdEntrepot(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<Entrepot>> findAllEntrepot(){
        return new ResponseEntity<>(entrepotService.findAllEntrepot(), HttpStatus.OK);
    }

}
