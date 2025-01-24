package esiag.back.controllers.accountManager;

import esiag.back.models.account.Account;
import esiag.back.services.accountManager.AccountManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account-manager")
public class AccountManagerController {

    @Autowired
    private AccountManagerService accountManagerService;

    @PostMapping("/update-points")
    public ResponseEntity<String> addEcologyPointsDelivery(
            @RequestParam("score") char score,
            @RequestBody Account account) {
        try {
            accountManagerService.addEcologyPointsDelivery(score, account);
            return ResponseEntity.ok("Points ajoutés avec succès");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erreur lors de l'ajout des points : " + e.getMessage());
        }
    }

}
