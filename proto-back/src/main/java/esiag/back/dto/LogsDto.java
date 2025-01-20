package esiag.back.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.RestController;

@Data
public class LogsDto {
    private String message;

    public LogsDto(String msg){
        this.message = msg;
    }
}