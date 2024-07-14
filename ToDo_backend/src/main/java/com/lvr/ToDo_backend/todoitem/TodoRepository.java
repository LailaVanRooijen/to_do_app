package com.lvr.ToDo_backend.todoitem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByTitleIgnoreCaseContaining(String title);

    List<Todo> findByCreatedOn(LocalDate date);

    List<Todo> findByTitleIgnoreCaseContainingAndCreatedOn(String title, LocalDate date);
}
