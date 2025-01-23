package esiag.back.controllers.accountManager;

import esiag.back.models.account.Account;
import esiag.back.services.accountManager.AccountManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/account-manager")
public class AccountManagerController {

    @Autowired
    private AccountManagerService accountManagerService;

    @GetMapping("/add-points")
    public void addEcologyPointsDelivery(@RequestParam Character score, @RequestParam Account account){
        accountManagerService.addEcologyPointsDelivery(score, account);
    }
}
