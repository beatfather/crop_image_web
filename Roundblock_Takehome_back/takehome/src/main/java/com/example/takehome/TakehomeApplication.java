package com.example.takehome;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.example")
@MapperScan("com.example.takehome.mapper")
@SpringBootApplication
public class TakehomeApplication {

    public static void main(String[] args) {
        SpringApplication.run(TakehomeApplication.class, args);
    }

}
