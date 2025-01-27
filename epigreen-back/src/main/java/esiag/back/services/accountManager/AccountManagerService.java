package esiag.back.services.accountManager;

import esiag.back.models.account.Account;
import esiag.back.repositories.account.AccountRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountManagerService {
    protected static Logger logger = LogManager.getLogger(AccountManagerService.class);

    @Autowired
    AccountRepository accountRepository;

    public void addEcologyPointsDelivery(char score, Account account){
        int accountPoints = 0;
        Object points = account.getEcologyPoints();
        if(points != null){
            String  stringValueOfPoints = String.valueOf(points);
            accountPoints = Integer.valueOf(stringValueOfPoints);
        }
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
        accountRepository.save(account);
    }

}