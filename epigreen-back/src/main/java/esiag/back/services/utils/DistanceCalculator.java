package esiag.back.services.utils;

public class DistanceCalculator {

    public static double calculateDistance(double[] point1, double[] point2) {
        final double EARTH_RADIUS = 6371.01;

        double lat1 = Math.toRadians(point1[1]);
        double lon1 = Math.toRadians(point1[0]);
        double lat2 = Math.toRadians(point2[1]);
        double lon2 = Math.toRadians(point2[0]);

        double deltaLat = lat2 - lat1;
        double deltaLon = lon2 - lon1;

        double a = Math.pow(Math.sin(deltaLat / 2), 2)
                   + Math.cos(lat1) * Math.cos(lat2)
                   * Math.pow(Math.sin(deltaLon / 2), 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return EARTH_RADIUS * c;
    }
}
