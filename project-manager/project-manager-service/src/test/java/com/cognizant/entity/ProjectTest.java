package com.cognizant.entity;

import static org.junit.Assert.*;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
public class ProjectTest {
	
	@Test
	public void testProject(){
		Project test = new Project();
		Date endDate = new Date();
		test.setEndDate(endDate);
		assertEquals(endDate,test.getEndDate());
		int priority = 0;
		test.setPriority(priority);
		assertEquals(0,test.getPriority());
		String projectName = "project";
		test.setProjectName(projectName);
		assertEquals("project",test.getProjectName());
		Date startDate = new Date();
		test.setStartDate(startDate);
		assertEquals(startDate,test.getStartDate());
		String status = "status";
		test.setStatus(status);
		assertEquals("status",test.getStatus());
		Long userId = 1l;
		test.setUserId(userId);
		assertEquals(Long.valueOf(userId),test.getUserId());
	}

}
