package repository;



import org.springframework.data.mongodb.repository.MongoRepository;
import model.Todo;

public interface TodoItemRepository extends MongoRepository<Todo, Long>{
	
}
