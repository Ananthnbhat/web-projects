package com.cognizant.controller;

import com.cognizant.entity.ParentTask;
import com.cognizant.model.ParentTaskRecord;
import com.cognizant.service.ParentTaskService;
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
public class ParentTaskControllerTest {

    @InjectMocks
    public ParentTaskController parentTaskController;

    @Mock
    public ParentTaskService parentTaskService;

    @Test
    public void saveTest(){

        Mockito.when(parentTaskService.save(Mockito.any(ParentTaskRecord.class))).thenReturn(new ParentTaskMockData().getSingleParentTask());
        ParentTask output = parentTaskController.save(new ParentTaskMockData().getParentTaskRecord());

        Assert.assertEquals(new ParentTaskMockData().getSingleParentTask().getParentId(), output.getParentId());
        Assert.assertEquals(new ParentTaskMockData().getSingleParentTask().getParentTaskName(), output.getParentTaskName());
    }

    @Test
    public void getParentTasksTest(){

        Mockito.when(parentTaskService.getParentTasks()).thenReturn(new ParentTaskMockData().getParentTaskList());
        List<ParentTask> output = parentTaskController.getParentTasks();

        Assert.assertEquals(2, output.size());
    }
}
