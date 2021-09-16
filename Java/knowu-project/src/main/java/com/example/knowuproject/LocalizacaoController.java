package com.example.knowuproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/usuario")
@RestController
public class LocalizacaoController{

    @GetMapping("/localizacao")
    public String getLocalizacao(){
        return "location";
    }

}
