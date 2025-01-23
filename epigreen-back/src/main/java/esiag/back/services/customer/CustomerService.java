package esiag.back.services.customer;

import esiag.back.models.customer.Customer;
import esiag.back.repositories.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    public Customer findByIdCustomer(Long idCustomer) {
        Optional<Customer> optionalCustomer = customerRepository.findById(idCustomer);
        return optionalCustomer.orElse(null);
    }

    public List<Customer> findAllCustomer(){
        return customerRepository.findAll();
    }
}