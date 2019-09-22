package com.cognizant.model;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserRecordTest {
	
	@Test
	public void testUserRecord() {
		UserRecord test = new UserRecord();
		test.setEmpId(1l);
		assertEquals(Long.valueOf(1),test.getEmpId());
		test.setFirstName("qwe");
		assertEquals("qwe",test.getFirstName());
		test.setLastName("rty");
		assertEquals("rty",test.getLastName());
		test.setUserId(1l);
		assertEquals(Long.valueOf(1),test.getUserId());
	}

}
