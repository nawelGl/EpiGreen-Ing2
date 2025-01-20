package esiag.back;

import esiag.back.services.httpRequests.DistanceRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EsiagBackApplication {
	public static void main(String[] args) {
		SpringApplication.run(EsiagBackApplication.class, args);
	}
}
