package esiag.back.dto;


import esiag.back.models.transportationMeans.Area;

public class ProcessRoutesDto {

    private int idProcessRoutes;
    private String typeTransportation;
    private double carbonFootprint;
    private int idProduct;
    private Integer idStepDep;
    private Integer idStepArr;
    private String cityArr;  // Changement de country en city
    private String cityDep;
    private Area area;// Changement de country en city

    // Constructeurs
    public ProcessRoutesDto() {}

    public ProcessRoutesDto(int idProcessRoutes, String typeTransportation, double carbonFootprint, int idProduct,
                            Integer idStepDep, Integer idStepArr, String cityArr, String cityDep,Area area) {
        this.idProcessRoutes = idProcessRoutes;
        this.typeTransportation = typeTransportation;
        this.carbonFootprint = carbonFootprint;
        this.idProduct = idProduct;
        this.idStepDep = idStepDep;
        this.idStepArr = idStepArr;
        this.cityArr = cityArr;
        this.cityDep = cityDep;
        this.area = area;
    }

    // Getters et setters
    public int getIdProcessRoutes() {
        return idProcessRoutes;
    }

    public void setIdProcessRoutes(int idProcessRoutes) {
        this.idProcessRoutes = idProcessRoutes;
    }

    public String getTypeTransportation() {
        return typeTransportation;
    }

    public void setTypeTransportation(String typeTransportation) {
        this.typeTransportation = typeTransportation;
    }

    public double getCarbonFootprint() {
        return carbonFootprint;
    }

    public void setCarbonFootprint(double carbonFootprint) {
        this.carbonFootprint = carbonFootprint;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
    }

    public Integer getIdStepDep() {
        return idStepDep;
    }

    public void setIdStepDep(Integer idStepDep) {
        this.idStepDep = idStepDep;
    }

    public Integer getIdStepArr() {
        return idStepArr;
    }

    public void setIdStepArr(Integer idStepArr) {
        this.idStepArr = idStepArr;
    }

    public String getCityArr() {
        return cityArr;
    }

    public void setCityArr(String cityArr) {
        this.cityArr = cityArr;
    }

    public String getCityDep() {
        return cityDep;
    }

    public void setCityDep(String cityDep) {
        this.cityDep = cityDep;
    }
    public Area getArea() {return area;}

    public void setArea(Area area) {
        this.area = area;
    }

    // Méthode toString
    @Override
    public String toString() {
        return "ProcessRoutesDto{" +
                "idProcessRoutes=" + idProcessRoutes +
                ", typeTransportation='" + typeTransportation + '\'' +
                ", carbonFootprint=" + carbonFootprint +
                ", idProduct=" + idProduct +
                ", idStepDep=" + idStepDep +
                ", idStepArr=" + idStepArr +
                ", cityArr='" + cityArr + '\'' +
                ", cityDep='" + cityDep + '\'' +
                ", area='" + area + '\'' +
                '}';
    }
}

