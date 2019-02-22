package repository;


import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import model.Todo;

public interface TodoItemRepository extends MongoRepository<Todo, String>{

	Optional<Todo> findById(String id);
	
}
