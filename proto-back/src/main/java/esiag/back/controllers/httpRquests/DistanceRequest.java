package esiag.back.controllers.httpRequests;
import esiag.back.models.customer.Customer;
import esiag.back.models.store.Store;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DistanceRequest{
    public static float getDistanceFromApi(Customer customer, Store store){
        double customerLatitude = customer.getY();
        double customerLongitude = customer.getX();
        double storeLatitude = store.getY();
        double storeLongitude = store.getX();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.jawg.io/routing/route/v1/car/" + customerLatitude + "," + customerLongitude + ";" + storeLatitude + "," + storeLongitude +"?overview=false&access-token=FUxkMYNp2rg3hG6JZc11POCUWUdzyLX8AXzrtcl1gilV2XMvf0BtFEOoPTtL8ZCJ"))
                .build();

        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Réponse HTTP brute : " + response.body());

            // Parse le JSON pour récupérer la distance
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.body());
            float distance = (float) rootNode.get("routes").get(0).get("distance").asDouble();

            System.out.println("Distance extraite : " + distance);
            return distance;

        } catch (Exception e) {
            System.out.println("Erreur lors de la requête HTTP : " + e.getMessage());
            return -1; // Code d'erreur en cas d'échec
        }
    }



    public static float getDistanceFromApiTest(double customerLatitude, double customerLongitude, double storeLatitude, double storeLongitude){
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.jawg.io/routing/route/v1/car/" + customerLatitude + "," + customerLongitude + ";" + storeLatitude + "," + storeLongitude +"?overview=false&access-token=FUxkMYNp2rg3hG6JZc11POCUWUdzyLX8AXzrtcl1gilV2XMvf0BtFEOoPTtL8ZCJ"))
                .build();

        HttpResponse<String> response;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Réponse HTTP brute : " + response.body());

            // Parse le JSON pour récupérer la distance
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.body());
            float distance = (float) rootNode.get("routes").get(0).get("distance").asDouble();

            System.out.println("Distance extraite : " + distance);
            return distance;

        } catch (Exception e) {
            System.out.println("Erreur lors de la requête HTTP : " + e.getMessage());
            return -1; // Code d'erreur en cas d'échec
        }
    }
}