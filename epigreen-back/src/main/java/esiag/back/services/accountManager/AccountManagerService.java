package esiag.back.services.accountManager;

import esiag.back.models.account.Account;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class AccountManagerService {
    protected static Logger logger = LogManager.getLogger(AccountManagerService.class);

    public void addEcologyPointsDelivery(char score, Account account){
        int accountPoints = account.getEcologyPoints();
        //TODO : ajouter nombre de points dans accountPoints selon une logique.
        switch (score){
            case 'A' : accountPoints += 50;
                break;
            case 'B' : accountPoints += 40;
                break;
            case 'C' : accountPoints += 20;
                break;
            case 'D' : accountPoints += 5;
                break;
            default:
                break;
        }
        account.setEcologyPoints(accountPoints);
    }

}