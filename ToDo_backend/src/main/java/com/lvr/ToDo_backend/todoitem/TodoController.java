package com.lvr.ToDo_backend.todoitem;

import com.lvr.ToDo_backend.exceptionhandling.EmptyItemException;
import com.lvr.ToDo_backend.exceptionhandling.EmptyListException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;

import static com.lvr.ToDo_backend.ControllerRoutes.TODO_ROUTE;

@RestController
@RequestMapping(TODO_ROUTE)
@CrossOrigin(origins = {"${client}"})
@AllArgsConstructor
public class TodoController {
    private final TodoRepository todoRepository;
    private final TodoService todoService;

    @GetMapping
    public List<Todo> getAll(@RequestParam(required = false) String title, @RequestParam(required = false) LocalDate date, @RequestParam(required = false) String sortBy, @RequestParam(required = false) Boolean showCompleted) throws EmptyListException {
        return todoService.getBy(title, date, sortBy, showCompleted);
    }

    @GetMapping("/{id}")
    public Todo getBy(@PathVariable Long id) {
        return todoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }


    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody Todo item) throws EmptyItemException {
        Todo savedItem = todoService.save(item);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(savedItem.getId())
                        .toUri();
        return ResponseEntity.created(location).body(savedItem);
    }


    @PatchMapping("/{id}")
    public Todo update(@PathVariable Long id,
                       @RequestBody TodoPatchDto item) {
        return todoService.update(id, item);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        todoRepository.delete(todoRepository.findById(id).orElseThrow(EntityNotFoundException::new));
    }
}
