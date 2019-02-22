package com.todo.spring;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;



import model.Todo;
import repository.TodoItemRepository;
import service.TodoService;


@EnableAutoConfiguration
//@ContextConfiguration(classes = {RepositoriesContextConfig.class, ServicesContextConfig.class})




@RunWith(SpringRunner.class)
@SpringBootTest
public class Todo2ApplicationTests {

	@Autowired
    private TodoService todoService;

    @Autowired
    private TodoItemRepository todoItemRepository;

    @After
    @Before
    public void afterEachCase() {
    	todoItemRepository.deleteAll();
    }
	@Test
	public void contextLoads() {
	}
	@Test
    public void test_AddTodo() {

    //    Todo todo = createDummy();
     //   todoService.addTodo(todo);

        Assert.assertEquals(1, todoService.findAllTodos().size());
    }

    @Test
    public void test_findById() {
    //    Todo todo = createDummy();
    //    todoService.addTodo(todo);
     //   long id = todo.getId();

      //  Todo loaded = todoService.findById(id);

     //   assertNotNull(todo);

       

    }

}
