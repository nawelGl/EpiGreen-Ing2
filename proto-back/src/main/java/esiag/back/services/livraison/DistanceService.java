package esiag.back.services.livraison;

import esiag.back.services.httpRequests.DistanceRequest;
import esiag.back.models.customer.Customer;
import esiag.back.repositories.customer.CustomerRepository;
import esiag.back.models.store.Store;
import esiag.back.repositories.store.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DistanceService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private StoreRepository storeRepository;

    public float calculateDistance(Long customerId, Long storeId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Client non trouvé"));
        Store store = storeRepository.findById(storeId)
                .orElseThrow(() -> new RuntimeException("Magasin non trouvé"));

        return DistanceRequest.getDistanceFromApi(customer, store);
    }
}
