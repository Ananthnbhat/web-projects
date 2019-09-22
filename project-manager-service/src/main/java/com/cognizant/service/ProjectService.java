package com.cognizant.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.entity.Project;
import com.cognizant.model.ProjectRecord;
import com.cognizant.model.ProjectTaskRecord;
import com.cognizant.repository.ProjectRepository;
import com.cognizant.repository.TaskRepository;
import com.cognizant.repository.UserRepository;

@Transactional
@Service
public class ProjectService {

	private static final Logger logger = Logger.getLogger(ProjectService.class.getName());

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	public UserService userService;

	@Autowired
	public TaskService taskService;

	@Autowired
	public TaskRepository taskRepository;
	
	@Autowired
	public UserRepository userRepository;

	public List<ProjectTaskRecord> findAllRecords() {
		try {
			logger.info("getting data from project table");
			List<Project> projects = projectRepository.findAllProjects();
			List<ProjectTaskRecord> ptlist = new ArrayList<ProjectTaskRecord>();
			for (Project p : projects) {
				ProjectRecord projectRecord = new ProjectRecord();
				projectRecord.setProjectId(p.getProjectId());
				projectRecord.setEndDate(p.getEndDate());
				projectRecord.setPriority(p.getPriority());
				projectRecord.setProjectName(p.getProjectName());
				projectRecord.setStartDate(p.getStartDate());
				projectRecord.setUserId(p.getUserId());
				String userName = userService.getUserName(p.getUserId());
				projectRecord.setUserName(userName);
				Long noOfTask = taskService.getNoOfTasks(p.getProjectId());
				Long completedTask = taskService.getCompletedTasks(p.getProjectId());
				ProjectTaskRecord pt = new ProjectTaskRecord();
				pt.setNoOfTask(noOfTask);
				pt.setCompletedTask(completedTask);
				pt.setProjectRecord(projectRecord);
				ptlist.add(pt);
			}
			return ptlist;
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while getting all data into project table", e.getMessage());
			throw e;
		}
	}

	public ProjectRecord saveProject(ProjectRecord projectRecord) {
		try {
			logger.info("saving data to project table");
			Project project = new Project();
			project.setProjectName(projectRecord.projectName);
			project.setStartDate(projectRecord.startDate);
			project.setEndDate(projectRecord.endDate);
			project.setPriority(projectRecord.priority);
			project.setUserId(projectRecord.getUserId());
			project.setStatus("N");
			projectRepository.save(project);
			return projectRecord;
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while saving all data into project table", e.getMessage());
			throw e;
		}
	}

	public String deleteProject(Long projectId) {
		try {
			logger.info("deleting data from project table");
			projectRepository.suspendById(projectId);
			taskRepository.suspendtaskById(projectId);
			return "deleted project successfully";
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while deletig data from project table", e.getMessage());
			throw e;
		}
	}

	public Project updateProject(Project project, Long projectId) {
		try {
			logger.info("updating data in project table");
			project.setProjectId(projectId);
			project.setStatus("N");
			return projectRepository.save(project);
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while updating data in project table", e.getMessage());
			throw e;
		}
	}

	public List<Project> findAllProjects() {
		try {
			logger.info("getting all data from project table");
			return projectRepository.findAllProjects();
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while getting all data from project table", e.getMessage());
			throw e;
		}
	}

	public String getProjectName(Long projectId) {
		try {
			logger.info("getting project name from project table");
			String projectName = projectRepository.getProjectName(projectId);
			return projectName;
		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception occurred while getting project name from project table",
					e.getMessage());
			throw e;
		}
	}

}
