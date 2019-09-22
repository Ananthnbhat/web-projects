package com.cognizant.controller;

import com.cognizant.entity.User;
import com.cognizant.model.UserRecord;
import com.cognizant.service.UserService;
import com.cognizant.util.UserMockData;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserControllerTest {

    @InjectMocks
    public UserController userController;

    @Mock
    public UserService userService;

    @Test
    public void saveUserTest(){

        Mockito.when(userService.saveUser(Mockito.any(UserRecord.class))).thenReturn(new UserMockData().getSingleUser());
        User output = userController.saveUser(new UserMockData().getUserRecord());

        Assert.assertEquals(new UserMockData().getSingleUser().getUserId(), output.getUserId());

    }

    @Test
    public void getAllTest(){

        Mockito.when(userService.getAll()).thenReturn(new UserMockData().getUserList());

        List<User> output = userController.getAll();

        Assert.assertEquals(2, output.size());
    }

    @Test
    public void updateUserTest(){

        Mockito.when(userService.updateUser(Mockito.any(User.class), Mockito.anyLong())).thenReturn(new UserMockData().getSingleUser());

        User output = userController.updateUser(new UserMockData().getSingleUser(), (long)1);

        Assert.assertEquals(new UserMockData().getSingleUser().getUserId(),output.getUserId());
        Assert.assertEquals(new UserMockData().getSingleUser().getFirstName(),output.getFirstName());
        Assert.assertEquals(new UserMockData().getSingleUser().getLastName(),output.getLastName());
        Assert.assertEquals(new UserMockData().getSingleUser().getEmpId(),output.getEmpId());
    }

    @Test
    public void deleteUserTest(){

        Mockito.when(userService.deleteUser(Mockito.anyLong())).thenReturn("user deleted successfully");

        String output = userController.deleteUser((long)1);

        Assert.assertEquals("user deleted successfully", output);
    }
}
