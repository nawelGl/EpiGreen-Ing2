package esiag.back.services.httpRequests;

import esiag.back.models.customer.Customer;
import esiag.back.models.store.Store;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class DistanceRequest{
    protected static Logger logger = LogManager.getLogger(DistanceRequest.class);
    private static final String BASE_URL = "https://api.jawg.io/routing/route/v1/car/";

    @Value("${jawg.api.token}")
    private static String apiToken;

    public static float getDistanceFromApi(Customer customer, Store store){
        double customerLatitude = customer.getLatitude();
        double customerLongitude = customer.getLongitude();
        double storeLatitude = store.getLatitude();
        double storeLongitude = store.getLongitude();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(BASE_URL + customerLatitude + "," + customerLongitude + ";" + storeLatitude + "," + storeLongitude +"?overview=false&access-token=FUxkMYNp2rg3hG6JZc11POCUWUdzyLX8AXzrtcl1gilV2XMvf0BtFEOoPTtL8ZCJ"))
                .build();

        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            logger.info("Réponse HTTP brute : " + response.body());

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.body());
            float distance = (float) rootNode.get("routes").get(0).get("distance").asDouble();

            logger.info("TEST LOGGER");
            logger.info("Distance extraite : " + distance);

            if (response.statusCode() != 200) {
                logger.warn("Erreur API : Code " + response.statusCode());
                return -1;
            }
            return distance;

        } catch (Exception e) {
            logger.warn("Erreur lors de la requête HTTP : " + e.getMessage());
            return -1;
        }
    }



    public static float getDistanceFromApiTest(double customerLatitude, double customerLongitude, double storeLatitude, double storeLongitude){
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(BASE_URL + customerLatitude + "," + customerLongitude + ";" + storeLatitude + "," + storeLongitude +"?overview=false&access-token=FUxkMYNp2rg3hG6JZc11POCUWUdzyLX8AXzrtcl1gilV2XMvf0BtFEOoPTtL8ZCJ"))
                .build();

        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            logger.info("Réponse HTTP brute : " + response.body());

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.body());
            float distance = (float) rootNode.get("routes").get(0).get("distance").asDouble();

            logger.info("TEST LOGGER");
            logger.info("Distance extraite : " + distance);

            if (response.statusCode() != 200) {
                logger.warn("Erreur API : Code " + response.statusCode());
                return -1;
            }
            return distance;

        } catch (Exception e) {
            logger.warn("Erreur lors de la requête HTTP : " + e.getMessage());
            return -1;
        }
    }
}