package controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import model.Todo;
import service.TodoService;


@RestController
@RequestMapping("/api/todos")

@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Todo> findAllTodos() {
		return todoService.findAllTodos();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/{id}")
	public Todo getTodo(@PathVariable final String id) {
		return todoService.findById(id);
	}
	@RequestMapping(method = RequestMethod.POST, value = "/addTodo")
	public String save(@RequestBody Todo todo) {
		todoService.addTodo(todo);

		return todo.getId();
	}
}
