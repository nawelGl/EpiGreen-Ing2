package esiag.back.dto;

public class DistanceRequestDto {
    //Récupération de longitude et latitude d'un client et d'un magasin depuis le front pour calculer la distance entre les deux
    private Long customerId;
    private Long storeId;

    // Constructeurs
    public DistanceRequestDto() {
    }

    public DistanceRequestDto(Long customerId, Long storeId) {
        this.customerId = customerId;
        this.storeId = storeId;
    }

    // Getters et setters
    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Long getStoreId() {
        return storeId;
    }

    public void setStoreId(Long storeId) {
        this.storeId = storeId;
    }
}
