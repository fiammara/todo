package com.todo.spring.repository;


import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.todo.spring.model.Todo;

@Repository
public interface TodoItemRepository extends CrudRepository<Todo, Long>{

	Optional<Todo> findById(Long id);
	
	@Override
    List<Todo> findAll();
	
}
