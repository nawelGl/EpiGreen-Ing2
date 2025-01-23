package esiag.back.services.accountManager;

import esiag.back.models.account.Account;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class AccountManagerService {
    protected static Logger logger = LogManager.getLogger(AccountManagerService.class);

    public void addEcologyPointsDelivery(Character score, Account account){
        int accountPoints = account.getEcologyPoints();
        //TODO : ajouter nombre de points dans accountPoints selon une logique.
        switch (score){
            case 'A' :
                break;
            case 'B' :
                break;
            case 'C' :
                break;
            case 'D' :
                break;
            case 'E' :
                break;
        }
        account.setEcologyPoints(accountPoints);
    }

}