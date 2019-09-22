package com.cognizant.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.entity.Task;
import com.cognizant.model.TaskRecord;
import com.cognizant.repository.TaskRepository;

@Service
@Transactional
public class TaskService {

	private static final Logger logger = Logger.getLogger(TaskService.class.getName());

	@Autowired
	public TaskRepository taskRepository;

	@Autowired
	public UserService userService;

	@Autowired
	public ParentTaskService parentTaskService;
	
	@Autowired
	public ProjectService projectService;

	public TaskRecord saveTask(TaskRecord taskRecord) {
		try {
			logger.info("saving data to task table");
			Task task = new Task();
			task.setTaskName(taskRecord.taskName);
			task.setStartDate(taskRecord.startDate);
			task.setEndDate(taskRecord.endDate);
			task.setPriority(taskRecord.priority);
			task.setStatus(taskRecord.status);
			task.setProjectId(taskRecord.getProjectId());
			task.setParentId(taskRecord.getParentTaskId());
			task.setUserId(taskRecord.getUserId());
			taskRepository.save(task);
			return taskRecord;
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while saving all data into task table", e.getMessage());
			throw e;
		}
	}

	public List<Task> getTask() {
		try {
			logger.info("getting data from task table");
			return taskRepository.findAll();
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while getting all data from task table", e.getMessage());
			throw e;
		}

	}

	public String deleteTask(Long taskId) {
		try {
			logger.info("deleting data from task table");
			taskRepository.suspendById(taskId);
			return "Task deleted successfully";
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while deleting data from task table", e.getMessage());
			throw e;
		}
	}

	public Task updateTask(Task task, Long taskId) {
		try {
			logger.info("updating data in task table");
			task.setTaskId(taskId);
			return taskRepository.save(task);
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while updating data into task table", e.getMessage());
			throw e;
		}
	}

	public List<TaskRecord> getTaskBySearch(Long projectId) {
		try {
			logger.info("searching task accoring to project id in task table");
			List<Task> tasks = taskRepository.getTaskBySearch(projectId);
			List<TaskRecord> tlist = new ArrayList<TaskRecord>();
			for (Task t : tasks) {
				TaskRecord taskRecord = new TaskRecord();
				taskRecord.setTaskId(t.getTaskId());
				taskRecord.setTaskName(t.getTaskName());
				taskRecord.setStartDate(t.getStartDate());
				taskRecord.setEndDate(t.getEndDate());
				taskRecord.setPriority(t.getPriority());
				taskRecord.setStatus(t.getStatus());
				taskRecord.setUserId(t.getUserId());
				taskRecord.setProjectId(t.getProjectId());
				taskRecord.setParentTaskId(t.getParentId());
				String parentTask = parentTaskService.getparentTaskData(t.getParentId());
				String userName = userService.getUserName(t.getUserId());
				String projectName=projectService.getProjectName(t.getProjectId());
				taskRecord.setParentName(parentTask);
				taskRecord.setUserName(userName);
				taskRecord.setProjectName(projectName);
				tlist.add(taskRecord);
			}
			return tlist;
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while searching task accoring to project id in task table",
					e.getMessage());
			throw e;
		}
	}

	public Long getNoOfTasks(Long projectId) {
		Long result = 0l;
		try {
			result = taskRepository.getTaskIdCount(projectId);
		} catch (Exception e) {
			System.out.printf("inside catch block of task id count>>", e);

		}

		return result;
	}

	public Long getCompletedTasks(Long projectId) {
		Long result = 0l;
		try {
			result = taskRepository.getStatusCompletedCount(projectId);
			if (result == null) {
				result = 0l;
			}
		} catch (Exception e) {
			System.out.printf("inside completed task count >>>>>", e);

		}
		return result;
	}
}
