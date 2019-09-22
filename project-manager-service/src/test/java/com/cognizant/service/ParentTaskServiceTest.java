package com.cognizant.service;

import com.cognizant.entity.ParentTask;
import com.cognizant.repository.ParentTaskRepository;
import com.cognizant.util.ParentTaskMockData;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
public class ParentTaskServiceTest {

    @InjectMocks
    public ParentTaskService parentTaskService;

    @Mock
    public ParentTaskRepository parentTaskRepository;

    @Test
    public void saveTest(){

        Mockito.when(parentTaskRepository.save(Mockito.any(ParentTask.class))).thenReturn(new ParentTaskMockData().getSingleParentTask());

        ParentTask output =  parentTaskService.save(new ParentTaskMockData().getParentTaskRecord());

        Assert.assertEquals(new ParentTaskMockData().getSingleParentTask().getParentId(), output.getParentId());
        Assert.assertEquals(new ParentTaskMockData().getSingleParentTask().getParentTaskName(), output.getParentTaskName());

    }

    @Test
    public void getParentTasksTest(){

        Mockito.when(parentTaskRepository.findAll()).thenReturn(new ParentTaskMockData().getParentTaskList());
        List<ParentTask> output = parentTaskService.getParentTasks();

        Assert.assertEquals(2, output.size());

    }
    
    @Test
    public void getparentTaskDataTest() {
    	Mockito.when(parentTaskRepository.findNameById(Mockito.anyLong()))
		.thenReturn(new ParentTaskMockData().getParentTaskListData());
    	String output = parentTaskService.getparentTaskData(Mockito.anyLong());
    	Assert.assertEquals("DummyParentTask", output);
    }
    
    @Test(expected = RuntimeException.class)
    public void saveTestNavigativeScenario() {    	
    	Mockito.when(parentTaskRepository.save(Mockito.any(ParentTask.class))).thenThrow(RuntimeException.class);
        ParentTask output =  parentTaskService.save(new ParentTaskMockData().getParentTaskRecord());
        Assert.assertEquals(new ParentTaskMockData().getSingleParentTask().getParentId(), output.getParentId());
    }
    
    @Test(expected = RuntimeException.class)
    public void getParentTasksTestNavigativeScenario() {    	
    	 Mockito.when(parentTaskRepository.findAll()).thenThrow(RuntimeException.class);
         List<ParentTask> output = parentTaskService.getParentTasks();

         Assert.assertEquals(2, output.size());
    }
    
    @Test(expected = RuntimeException.class)
    public void getparentTaskDataTestNavigativeScenario() {    	
    	Mockito.when(parentTaskRepository.findNameById(Mockito.anyLong()))
    	.thenThrow(RuntimeException.class);
    	String output = parentTaskService.getparentTaskData(Mockito.anyLong());
    	Assert.assertEquals("DummyParentTask", output);
    }
}
