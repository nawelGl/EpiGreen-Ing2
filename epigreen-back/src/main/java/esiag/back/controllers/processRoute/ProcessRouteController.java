package esiag.back.controllers.processRoute;

import esiag.back.models.processRoute.ProcessRoute;
import esiag.back.services.processRoute.ProcessRouteService;
import esiag.back.services.transportationMean.TransportationMeanService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("processroute")
public class ProcessRouteController {

    private static final Logger logger = Logger.getLogger( ProcessRouteController.class.getName() );

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

    

    @PostMapping("/update")
    public ResponseEntity<ProcessRoute> updateCarbonFootprint(@RequestBody ProcessRoute processRoute) {
    logger.info("Mise à jour de l'empreinte carbone pour la route ID : " + processRoute.getIdProcessRoutes());
    logger.info("Reçu ProcessRoute : " + processRoute);
    boolean isUpdated = processRouteService.updateCarbonFootprint(processRoute);

    if (!isUpdated) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
    }
    return new ResponseEntity<>(processRoute, HttpStatus.OK); 
}

    
    

}