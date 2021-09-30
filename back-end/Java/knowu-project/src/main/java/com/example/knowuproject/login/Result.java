package com.example.knowuproject.login;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

import java.util.List;

public class Result {

    private String formatted_address;

    public String getFormatted_address() {
        return formatted_address;
    }

    @Override
    public String toString() {
        return formatted_address;
    }
}
