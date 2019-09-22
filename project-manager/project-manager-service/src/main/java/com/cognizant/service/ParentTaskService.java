package com.cognizant.service;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.entity.ParentTask;
import com.cognizant.model.ParentTaskRecord;
import com.cognizant.repository.ParentTaskRepository;

@Service
@Transactional
public class ParentTaskService {

	private static final Logger logger = Logger.getLogger(ParentTaskService.class.getName());

	@Autowired
	public ParentTaskRepository parentTaskRepository;

	public ParentTask save(ParentTaskRecord parentTaskRecord) {
		try {
			logger.info("saving data to parent task table");
			ParentTask parentTask = new ParentTask();
			parentTask.setParentTaskName(parentTaskRecord.taskName);
			return parentTaskRepository.save(parentTask);
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while saving all data into parent task table", e.getMessage());
			throw e;
		}
	}

	public List<ParentTask> getParentTasks() {
		try {
			logger.info("grtting all data from parent task table");
			return parentTaskRepository.findAll();
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while getting all parent task data from RDS", e.getMessage());
			throw e;
		}
	}

	public String getparentTaskData(Long parentId) {
	String parentTaskName = parentTaskRepository.findNameById(parentId);
		return parentTaskName;
	}

}
