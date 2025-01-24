package esiag.back.services.delivery;

import esiag.back.models.delivery.Delivery;
import esiag.back.repositories.delivery.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    public Delivery findByIdDelivery(Long deliveryId) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(deliveryId);
        return optionalDelivery.orElse(null);
    }

    public List<Delivery> findAllDelivery(){
        return deliveryRepository.findAll();
    }

}
