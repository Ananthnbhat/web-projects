package com.cognizant.model;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
public class ProjectTaskRecordTest {
	
	@Test
	public void testProjectTaskRecord() {
		ProjectTaskRecord test = new ProjectTaskRecord();
		test.setCompletedTask(1l);
		assertEquals(1l,test.getCompletedTask());
		test.setNoOfTask(1l);
		assertEquals(1l,test.getNoOfTask());
		ProjectRecord projectRecord = new ProjectRecord();
		test.setProjectRecord(projectRecord);
		assertEquals(projectRecord,test.getProjectRecord());
		
	}

}
