package esiag.back.controllers.logs;

import esiag.back.dto.LogsDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogsController {
    @GetMapping("/api/info")
    public LogsDto getInfo() {
        return new LogsDto("Ceci est une information provenant du back-end");
    }
}
