package esiag.back.controllers.httpRequests;
import esiag.back.models.customer.Customer;
import esiag.back.models.store.Store;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class DistanceRequest{
    public float getDistanceFromApi(Customer customer, Store store){
        double customerLatitude = customer.getY();
        double customerLongitude = customer.getX();
        double storeLatitude = store.getY();
        double storeLongitude = store.getX();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.jawg.io/routing/route/v1/car/" + customerLatitude + "," + customerLongitude + ";" + storeLatitude + "," + storeLongitude +"?overview=false&access-token=FUxkMYNp2rg3hG6JZc11POCUWUdzyLX8AXzrtcl1gilV2XMvf0BtFEOoPTtL8ZCJ"))
                .build();

//        HttpResponse<float> response;
//        try {
//            response = client.send(request, HttpResponse.BodyHandlers.ofFloat());
//            villesEphemeride = mapper.readValue(response.body(), VillesEphemeride.class);
//        } catch (Exception e) {
//            System.out.println("Erreur lors de la requête HTTP : " + e.getMessage());
//        }
//
//
//        HttpResponse<String> response;
//        ObjectMapper mapper = new ObjectMapper();
//        VillesEphemeride villesEphemeride = new VillesEphemeride();
//        try {
//            response = client.send(request, HttpResponse.BodyHandlers.ofString());
//            villesEphemeride = mapper.readValue(response.body(), VillesEphemeride.class);
//        } catch (Exception e) {
//            System.out.println("Erreur lors de la requête HTTP : " + e.getMessage());
//        }
        return 0;
    }
}