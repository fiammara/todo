package repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import model.Todo;

public interface TodoItemRepository  extends CrudRepository<Todo, Long>{
	@Override
    List<Todo> findAll();
}
