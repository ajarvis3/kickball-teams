package com.example.kickball;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class KickballBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(KickballBackendApplication.class, args);
    }
}
