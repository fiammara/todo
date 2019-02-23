package com.todo.spring.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.todo.spring.model.Todo;
import com.todo.spring.repository.TodoItemRepository;

@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	private TodoItemRepository todoItemRepository;
	
	@Override
	public List<Todo> findAllTodos() {
		
		return todoItemRepository.findAll();
	}

	@Override
	public void addTodo(Todo todo) {
		todoItemRepository.save(todo);
		
	}

	@Override
	public Todo findById(String id) {
		Optional<Todo> result = todoItemRepository.findById(id);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

}