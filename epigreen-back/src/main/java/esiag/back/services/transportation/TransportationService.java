package esiag.back.services.transportation;

import esiag.back.models.transportation.Transportation;
import esiag.back.repositories.transportation.TransportationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransportationService {

    @Autowired
    private TransportationRepository transportationRepository;

    public Transportation findByIdTransportation(Long idTransportation) {
        Optional<Transportation> optionalTransportation = transportationRepository.findById(idTransportation);
        return optionalTransportation.orElse(null);
    }

    public List<Transportation> findAllTransportation(){
        return transportationRepository.findAll();
    }

    public Transportation findTransportationWithMaxCO2() {
        Optional<Transportation> transportation = transportationRepository.findTransportationWithMaxCO2();
        return transportation.orElse(null);
    }

}
