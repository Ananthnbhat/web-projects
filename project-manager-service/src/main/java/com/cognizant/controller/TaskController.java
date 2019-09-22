package com.cognizant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.entity.Task;
import com.cognizant.model.TaskRecord;
import com.cognizant.service.TaskService;

@RestController
@RequestMapping("/projectmanager/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	
	@PostMapping("/saveTask")
	public TaskRecord saveTask(@RequestBody TaskRecord task){
		return taskService.saveTask(task);
	}
	
	@GetMapping("/getTasks")
	public List<Task> getTasks(){
		return taskService.getTask();
	}
	
	@PutMapping("/updateTask/{id}")
	public Task updateTask(@RequestBody Task task, @PathVariable ("id") Long taskId){
		return taskService.updateTask(task, taskId);
	}
	
	@PutMapping("/deleteTask/{id}")
	public String deleteTask(@PathVariable ("id") Long taskId){
		return taskService.deleteTask(taskId);
	}
	
	@GetMapping("/SearchTask/{id}")
	public List<TaskRecord> getTaskBySearch(@PathVariable ("id") Long projectId){
		return taskService.getTaskBySearch(projectId);
		
	}

}
