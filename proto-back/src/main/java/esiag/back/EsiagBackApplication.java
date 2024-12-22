package esiag.back;

import esiag.back.services.httpRequests.DistanceRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EsiagBackApplication {
	public static void main(String[] args) {

		//test une requete HTTP à l'api : OK
		//DistanceRequest.getDistanceFromApiTest(13.397634,52.529407,13.428555,52.593219);
		//System.out.println("@@@@@@@@@@");
		//DistanceRequest.getDistanceFromApiTest(2.4437364,48.7949591,2.3446542,48.8696077);
		SpringApplication.run(EsiagBackApplication.class, args);
	}
}
