package com.cognizant.model;

import static org.junit.Assert.assertEquals;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cognizant.entity.Task;
import com.cognizant.entity.User;

@RunWith(SpringJUnit4ClassRunner.class)
public class ProjectRecordTest {
	
	@Test
	public void testProjectRecord() {
		ProjectRecord test = new ProjectRecord();
		Date endDate = new Date();
		test.setEndDate(endDate);
		assertEquals(endDate,test.getEndDate());
		test.setPriority(1);
		assertEquals(1, test.getPriority());
		test.setProjectId(1l);
		assertEquals(Long.valueOf(1),test.getProjectId());
		test.setProjectName("swerve");
		assertEquals("swerve",test.getProjectName());
		Date startDate = new Date();
		test.setStartDate(startDate);
		assertEquals(startDate,test.getStartDate());
	test.setUserName("user");
	assertEquals("user",test.getUserName());
		
	}

}
