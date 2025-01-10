package esiag.back.services.address;

import esiag.back.models.address.Address;
import esiag.back.repositories.address.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address findByIdAddress(Long idAddress){
        Optional<Address> optionalAddress = addressRepository.findById(idAddress);
        return optionalAddress.orElse(null);
    }

    public List<Address> findAllAddress(){return addressRepository.findAll();}
}
