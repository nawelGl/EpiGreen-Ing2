package esiag.back.services.processRoute;

import esiag.back.models.processRoute.ProcessRoute;
import esiag.back.repositories.processRoutes.ProcessRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
@Service
public class ProcessRouteService {
    @Autowired
    private ProcessRouteRepository processRouteRepository;

        private static final Logger logger = Logger.getLogger( ProcessRouteService.class.getName() );


    public ProcessRoute findByIdProcessRoute(Long idProduct) {
        Optional<ProcessRoute> optionalProcessRoute = processRouteRepository.findById(idProduct);
        return optionalProcessRoute.orElse(null);
    }

    public List<ProcessRoute> findByIdProduct(Long idProduct) {
        return processRouteRepository.findByIdProduct(idProduct);
    }
    public List<ProcessRoute> findAllProcessRoute(){
        return processRouteRepository.findAll();
    }

    public boolean updateCarbonFootprint(ProcessRoute updatedProcessRoute) {
        logger.info("Tentative de mise à jour pour l'ID : " + updatedProcessRoute.getIdProcessRoutes());

        Optional<ProcessRoute> optionalProcessRoute = processRouteRepository.findById(updatedProcessRoute.getIdProcessRoutes());
        if(optionalProcessRoute.isPresent()){
            ProcessRoute processRoute = optionalProcessRoute.get();
            processRoute.setCarbonFootprint(updatedProcessRoute.getCarbonFootprint());
            processRouteRepository.save(processRoute);
            processRouteRepository.flush();
            logger.info("Mise à jour réussie pour l'ID : " + processRoute.getIdProcessRoutes());
            return true;
        }
       logger.info("Aucune route trouvée pour l'ID : " + updatedProcessRoute.getIdProcessRoutes());
        return false;
    }

    
    


}
