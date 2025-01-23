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
            case 'A' : //100   50
                break;
            case 'B' : //80    40
                break;
            case 'C' : //50    20
                break;
            case 'D' : //10    5
                break;
            case 'E' : //0     0
                break;
        }
        account.setEcologyPoints(accountPoints);
    }

}