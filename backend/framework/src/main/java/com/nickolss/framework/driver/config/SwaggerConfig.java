package com.nickolss.framework.driver.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Task Management API")
                        .version("1.0")
                        .contact(new Contact()
                                .name("Nickolss")
                                .email("nickolasmaraujo@gmail.com")
                                .url("https://github.com/nickolss")
                        )
                        .description("API documentation for task management application"));
    }
}
