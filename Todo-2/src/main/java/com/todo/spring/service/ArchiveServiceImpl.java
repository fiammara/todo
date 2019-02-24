package com.todo.spring.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.todo.spring.model.ArchiveItem;
import com.todo.spring.repository.ArchiveRepository;

@Service
public class ArchiveServiceImpl implements ArchiveService{

	@Autowired
	private ArchiveRepository archiveRepository;
	
	@Override
	public List<ArchiveItem> findAllArchivedItems() {
		
		return archiveRepository.findAll();
	}

}
