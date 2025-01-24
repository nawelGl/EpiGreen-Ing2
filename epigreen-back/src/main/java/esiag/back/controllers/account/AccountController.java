package esiag.back.controllers.account;

import esiag.back.models.account.Account;
import esiag.back.services.account.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/{id}")
    public ResponseEntity<Account> findByIdAccount(@PathVariable Long id){
        return new ResponseEntity<>(accountService.findByIdAccount(id), HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<Account>> findAllAccount(){
        return new ResponseEntity<>(accountService.findAllAccount(), HttpStatus.OK);
    }
}
