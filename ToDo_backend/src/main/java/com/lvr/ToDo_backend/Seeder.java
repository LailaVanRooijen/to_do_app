package com.lvr.ToDo_backend;

import com.lvr.ToDo_backend.todoitem.Todo;
import com.lvr.ToDo_backend.todoitem.TodoRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@AllArgsConstructor
@Component
public class Seeder implements CommandLineRunner {
    private final TodoRepository todoRepository;

    @Override
    public void run(String... args) throws Exception {
        seedTodos();
    }

    private void seedTodos() {
        todoRepository.save(new Todo("Read a book", "Make notes of book!", LocalDate.of(2024, 1, 3)));
        todoRepository.save(new Todo("Write a report", "Summarize findings.", LocalDate.of(2023, 2, 15)));
        todoRepository.save(new Todo("Go for a run", "Run 5km in the park.", LocalDate.of(2023, 3, 22)));
        todoRepository.save(new Todo("Complete project", "Submit final report.", LocalDate.of(2023, 4, 5)));
        todoRepository.save(new Todo("Cook dinner", "Prepare a healthy meal.", LocalDate.of(2023, 5, 12)));
        todoRepository.save(new Todo("Clean the house", "Dust and vacuum.", LocalDate.of(2023, 6, 19)));
        todoRepository.save(new Todo("Study for exams", "Revise chapters 1-3.", LocalDate.of(2023, 7, 25)));
        todoRepository.save(new Todo("Pay bills", "Pay electricity and water bills.", LocalDate.of(2023, 8, 30)));
        todoRepository.save(new Todo("Plan vacation", "Decide on destination.", LocalDate.of(2023, 9, 14)));
        todoRepository.save(new Todo("Call mom", "Check in with mom.", LocalDate.of(2023, 10, 1)));
    }
}
