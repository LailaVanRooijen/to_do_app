package com.lvr.ToDo_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ToDoBackendApplication {

	public static void main(String[] args) {

		SpringApplication app = new SpringApplication(ToDoBackendApplication.class);
		app.setBanner(new CustomBanner());
		app.run(args);
	}

}
