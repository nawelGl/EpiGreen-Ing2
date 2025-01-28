package esiag.back.services.entrepot;

import esiag.back.models.entrepot.Entrepot;
import esiag.back.repositories.entrepot.EntrepotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntrepotService {

    @Autowired
    private EntrepotRepository entrepotRepository;

    public Entrepot findByIdEntrepot(Long entrepotId) {
        Optional<Entrepot> optionalEntrepot = entrepotRepository.findById(entrepotId);
        return optionalEntrepot.orElse(null);
    }

    public List<Entrepot> findAllEntrepot(){
        return entrepotRepository.findAll();
    }

}
