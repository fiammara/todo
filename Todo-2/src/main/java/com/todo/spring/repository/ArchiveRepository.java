package com.todo.spring.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.todo.spring.model.ArchiveItem;


public interface ArchiveRepository extends MongoRepository<ArchiveItem, String>{
	Optional<ArchiveItem> findById(String id);
}
