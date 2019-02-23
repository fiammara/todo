package com.todo.spring.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.todo.spring.model.Todo;
import com.todo.spring.service.TodoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin
@RestController
@Api(value = "todo")
@RequestMapping("/api/todos")

public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	
	@GetMapping
	@ApiOperation(value = "Get list of todos", notes = "Returns all todos")
	public List<Todo> findAllTodos() {
		return todoService.findAllTodos();
	}
	
	@GetMapping(path = "{id}")
	@ApiOperation(value = "Get todo", notes = "Returns todo by id")
	public Todo getTodo(@PathVariable final String id) {
		return todoService.findById(id);
	}
	
	@PostMapping
	@ApiOperation(value = "Add todo", notes = "Adds new todo")

	public String save(@ApiParam @RequestBody Todo todo) {
		todoService.addTodo(todo);

		return todo.getId();
	}
}
