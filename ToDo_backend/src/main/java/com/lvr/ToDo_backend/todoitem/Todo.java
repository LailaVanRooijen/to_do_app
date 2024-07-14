package com.lvr.ToDo_backend.todoitem;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    // created on moet final zijn en geen setter hebben, maar even tijdelijk voor de seeder
    @Setter
    private LocalDate createdOn = LocalDate.now();

    @Setter
    private String title;
    @Setter
    private String content;

    @Setter
    private Boolean isCompleted = false;

    public Todo(String title, String content, LocalDate createdOn) {
        this.createdOn = createdOn;
        this.title = title;
        this.content = content;
    }
}
