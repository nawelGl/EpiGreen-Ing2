package esiag.back.controllers.processRoute;

import esiag.back.models.processRoute.ProcessRoute;

import esiag.back.services.processRoute.ProcessRouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("processroute")
public class ProcessRouteController {

    @Autowired
    private ProcessRouteService processRouteService;
    @GetMapping("/{id}")
    public ResponseEntity<ProcessRoute> findByIdProcessRoute(@PathVariable Long id){
        return new ResponseEntity<>(processRouteService.findByIdProcessRoute(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<ProcessRoute>> findAllProcessRoute(){
        return new ResponseEntity<>(processRouteService.findAllProcessRoute(), HttpStatus.OK);
    }

    @GetMapping("by-product/{idProduct}")
    public ResponseEntity<List<ProcessRoute>> findByIdProduct(@PathVariable Long idProduct) {
        List<ProcessRoute> processRoutes = processRouteService.findByIdProduct(idProduct);
        return new ResponseEntity<>(processRoutes, HttpStatus.OK);
    }

}