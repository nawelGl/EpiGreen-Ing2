package esiag.back.repositories.customer;

import esiag.back.models.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    //A voir après test mais noramlement pas besoin de définir select by id ici

    // @Query(value="SELECT * FROM Customer WHERE id = ?", nativeQuery = true)
    // Customer findCustomerById();

    //@Query("SELECT c FROM Customer c WHERE c.id = :id")
    //Customer findCustomerById(@Param("id") Long id);

}