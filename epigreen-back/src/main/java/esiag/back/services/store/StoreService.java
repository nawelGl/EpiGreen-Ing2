package esiag.back.services.store;

import esiag.back.models.store.Store;
import esiag.back.repositories.store.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService{

    @Autowired
    private StoreRepository storeRepository;

    public Store findByIdStore(Long storeId) {
        Optional<Store> optionalStore = storeRepository.findById(storeId);
        return optionalStore.orElse(null);
    }

    public List<Store> findAllStore(){
        return storeRepository.findAll();
    }
}