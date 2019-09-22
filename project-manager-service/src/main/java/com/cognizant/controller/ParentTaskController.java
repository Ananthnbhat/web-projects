package com.cognizant.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.entity.ParentTask;
import com.cognizant.model.ParentTaskRecord;
import com.cognizant.service.ParentTaskService;

@RestController
@RequestMapping("/projectmanager/parentTask")
@CrossOrigin(origins="*")
public class ParentTaskController {
	
	@Autowired
	public ParentTaskService parentTaskService;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@PostMapping("/save")
	public ParentTask save(@RequestBody ParentTaskRecord parentTaskRecord) {
		logger.info("inside p");
		return parentTaskService.save(parentTaskRecord);
	}
	
	@GetMapping("/getParentTasks")
	public List<ParentTask> getParentTasks(){
		return parentTaskService.getParentTasks();
	}
}
