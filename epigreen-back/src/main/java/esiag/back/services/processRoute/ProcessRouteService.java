package esiag.back.services.processRoute;

import esiag.back.models.processRoute.ProcessRoute;
import esiag.back.models.sample.Sample;
import esiag.back.repositories.processRoutes.ProcessRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
@Service
public class ProcessRouteService {
    @Autowired
    private ProcessRouteRepository processRouteRepository;

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


}
