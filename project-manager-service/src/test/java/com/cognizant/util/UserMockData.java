package com.cognizant.util;

import com.cognizant.entity.User;
import com.cognizant.model.UserRecord;

import java.util.ArrayList;
import java.util.List;

public class UserMockData {

	public UserRecord getUserRecord() {
		UserRecord user = new UserRecord();
		user.setUserId((long) 1);
		user.setFirstName("Sam");
		user.setLastName("Smith");
		user.setEmpId((long) 121);
		return user;
	}

	public User getSingleUser() {
	
		return new User((long) 1, "Sam", "Smith", (long)101);
	}

	public List<User> getUserList() {

		List<User> userList = new ArrayList<User>();

		userList.add(new User((long) 1, "Sam", "Smith", (long) 101));

		userList.add(new User((long) 2, "Jom", "Smith", (long) 102));

		return userList;
	}

	public String getUserName() {
		return "Dummy name";
	}
}
