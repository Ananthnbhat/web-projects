package com.cognizant.model;

import static org.junit.Assert.assertEquals;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cognizant.entity.ParentTask;
import com.cognizant.entity.Project;
import com.cognizant.entity.User;

@RunWith(SpringJUnit4ClassRunner.class)
public class TaskRecordTest {
	
	@Test
	public void testTaskRecord() {
		TaskRecord test = new TaskRecord();
		Date endDate = new Date();
		test.setEndDate(endDate);
		assertEquals(endDate,test.getEndDate());
		test.setParentName("abc");
		assertEquals("abc",test.getParentName());
		test.setPriority(1);
		assertEquals(1,test.getPriority());
		
		Date startDate = new Date();
		test.setStartDate(startDate);
		assertEquals(startDate,test.getStartDate());
		test.setStatus("status");
		assertEquals("status",test.getStatus());
		test.setTaskId(1l);
		assertEquals(1l,test.getTaskId());
		test.setTaskName("name");
		assertEquals("name",test.getTaskName());
	test.setProjectName("manager");
	assertEquals("manager",test.getProjectName());
	test.setUserName("user");
	assertEquals("user",test.getUserName());
		
	}

}
