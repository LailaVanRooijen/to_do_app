package com.lvr.ToDo_backend.todoitem;

import com.lvr.ToDo_backend.exceptionhandling.EmptyItemException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;

@Service
@AllArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public List<Todo> getBy(String title, LocalDate date, String sortBy, Boolean showCompleted) {
        List<Todo> items;

        if (title != null && date != null) {
            items = todoRepository.findByTitleIgnoreCaseContainingAndCreatedOn(title, date);
        } else if (title != null) {
            items = todoRepository.findByTitleIgnoreCaseContaining(title);
        } else if (date != null) {
            items = todoRepository.findByCreatedOn(date);
        } else {
            items = todoRepository.findAll();
        }

        if (items.isEmpty()) {
            return todoRepository.findAll();
        }

        SortByOption sortOption = SortByOption.DATE_ASCEND;
        if (sortBy != null) {
            try {
                sortOption = SortByOption.valueOf(sortBy.toUpperCase().replace(" ", "_"));

            } catch (IllegalArgumentException e) {
                System.out.println("Not an valid enum " + e);
            }
        }
        switch (sortOption) {
            case DATE_DESCEND:
                items.sort(Comparator.comparing(Todo::getCreatedOn));
                break;
            case DATE_ASCEND:
                items.sort(Comparator.comparing(Todo::getCreatedOn).reversed());
                break;
            case ALPHABET:
                items.sort(Comparator.comparing(Todo::getTitle));
                break;
            default:
                break;
        }

        if (showCompleted != null) {
            if (!showCompleted) {
                items = items.stream().filter(item -> !item.getIsCompleted()).toList();
            }
        }
        return items;
    }

    public Todo save(Todo item) throws EmptyItemException {
        if (item.getTitle() == null || item.getTitle().isEmpty()) {
            throw new EmptyItemException();
        }
        item.setIsCompleted(false);
        return todoRepository.save(item);
    }

    private void validateToDoItem(Todo item) throws EmptyItemException {
        if (item == null) {
            throw new EmptyItemException();
        }
        if (item.getTitle() == null || item.getTitle().isEmpty()) {
            throw new IllegalArgumentException("title is null");
        } else if (item.getContent() == null || item.getContent().isEmpty()) {
            throw new IllegalArgumentException("content is null");
        }

    }

    public Todo update(Long id, TodoPatchDto patchItem) {
        Todo updatedItem = todoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if (patchItem == null) {
            throw new IllegalArgumentException("item is null");
        }
        if (patchItem.title() == null && patchItem.content() == null && patchItem.isCompleted() == null) {
            throw new IllegalArgumentException("There are no new values for update");
        }

        if (patchItem.title() != null && !patchItem.title().isEmpty()) {
            updatedItem.setTitle(patchItem.title());
        }

        if (patchItem.content() != null && !patchItem.content().isEmpty()) {
            updatedItem.setContent(patchItem.content());
        }

        if (patchItem.isCompleted() != null) {
            updatedItem.setIsCompleted(patchItem.isCompleted());
        }

        return todoRepository.save(updatedItem);
    }
}
