package service;

import java.util.List;

import model.Todo;


public interface TodoService {
	List<Todo> findAllTodos();

	void addTodo(Todo todo);

	Todo findById(String id);
}
