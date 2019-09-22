package com.cognizant.service;


import com.cognizant.entity.User;
import com.cognizant.repository.UserRepository;
import com.cognizant.util.UserMockData;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
public class UserServiceTest {

    @InjectMocks
    public UserService userService;

    @Mock
    public UserRepository userRepository;

    @Test
    public void saveUserTest(){
        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(new UserMockData().getSingleUser());
        User output = userService.saveUser(new UserMockData().getUserRecord());

        Assert.assertEquals(new UserMockData().getSingleUser().getUserId(),output.getUserId());
        Assert.assertEquals(new UserMockData().getSingleUser().getFirstName(),output.getFirstName());
        Assert.assertEquals(new UserMockData().getSingleUser().getLastName(),output.getLastName());
        Assert.assertEquals(new UserMockData().getSingleUser().getEmpId(),output.getEmpId());
    }

    @Test
    public void updateUserTest(){

        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(new UserMockData().getSingleUser());

        User output = userService.updateUser(new UserMockData().getSingleUser(), (long)1);

        Assert.assertEquals(new UserMockData().getSingleUser().getUserId(),output.getUserId());
        Assert.assertEquals(new UserMockData().getSingleUser().getFirstName(),output.getFirstName());
        Assert.assertEquals(new UserMockData().getSingleUser().getLastName(),output.getLastName());
        Assert.assertEquals(new UserMockData().getSingleUser().getEmpId(),output.getEmpId());

    }

    @Test
    public void deleteUserTest(){
        String output = userService.deleteUser((long)1);
        Assert.assertEquals("user deleted successfully", output);
    }

    @Test
    public void getAllTest(){
        Mockito.when(userRepository.findAll()).thenReturn(new UserMockData().getUserList());
        List<User> output = userService.getAll();
        Assert.assertEquals(2,output.size());
    }
    
    @Test
    public void getUserNameTest(){
    	Mockito.when(userRepository.getFullName(Mockito.anyLong())).thenReturn(new UserMockData().getUserName());
    	String output=userService.getUserName((long)1);
    	Assert.assertEquals("Dummy name",output);
    }
    
    @Test(expected = RuntimeException.class)
    public void saveUserTestNavigativeScenario() {
    	 Mockito.when(userRepository.save(Mockito.any(User.class))).thenThrow(RuntimeException.class);
    	 
    	 User output = userService.saveUser(new UserMockData().getUserRecord());

         Assert.assertEquals(new UserMockData().getSingleUser().getUserId(),output.getUserId());
    }
    
    @Test(expected = RuntimeException.class)
    public void updateUserTestNavigativeScenario() {
    	 Mockito.when(userRepository.save(Mockito.any(User.class))).thenThrow(RuntimeException.class);
    	 
    	 User output = userService.updateUser(new UserMockData().getSingleUser(), (long)1);

         Assert.assertEquals(new UserMockData().getSingleUser().getUserId(),output.getUserId());
    }
    
    @Test(expected = RuntimeException.class)
    public void deleteUserTestNavigativeScenario() {
    	Mockito.doThrow(EmptyResultDataAccessException.class).when(userRepository).deleteById(Mockito.anyLong());
    	 
    	 String output = userService.deleteUser((long)1);

         Assert.assertEquals("user deleted successfully", output);
    }
    
    @Test(expected = RuntimeException.class)
    public void getAllTestNavigativeScenario() {
    	 Mockito.when(userRepository.findAll()).thenThrow(RuntimeException.class);
         List<User> output = userService.getAll();
         Assert.assertEquals(2,output.size());
    }
    
    @Test(expected = RuntimeException.class)
    public void getUserNameTestNavigativeScenario() {
    	 Mockito.when(userRepository.getFullName(Mockito.anyLong())).thenThrow(RuntimeException.class);
    	String output=userService.getUserName((long)1);
    	Assert.assertEquals("Dummy name",output);
    }
}
