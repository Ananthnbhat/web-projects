package com.cognizant.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="task")

@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
allowGetters = true)
public class Task {

	@Id
	@GeneratedValue(generator="task_seq")
	@SequenceGenerator(name="task_seq",sequenceName="TASK_SEQ", allocationSize=1)
    @Column(name="task_id")
	private Long taskId;
	
	@Column(name="parent_id")
	private Long parentId;
	
	@Column(name="project_id")
	private Long projectId;
	
	@Column(name="task_name")
	private String taskName;
	
	@DateTimeFormat(pattern="yyyy-MM-dd") 
    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;
	
	
	@DateTimeFormat(pattern="yyyy-MM-dd") 
    @Temporal(TemporalType.DATE)
	@Column(name="end_date")
	private Date endDate;
	
	
	@Column(name="priority")
	private int priority;
	
	@Column(name="status")
	private String status;
	
	@Column(name = "user_id")
	private Long userId;

	public Long getTaskId() {
		return taskId;
	}

	public void setTaskId(Long taskId) {
		this.taskId = taskId;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Task(Long taskId, Long parentId, Long projectId, String taskName, Date startDate, Date endDate, int priority,
			String status, Long userId) {
		super();
		this.taskId = taskId;
		this.parentId = parentId;
		this.projectId = projectId;
		this.taskName = taskName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.priority = priority;
		this.status = status;
		this.userId = userId;
	}
//
//	public Task(Long parentId, Long projectId, String taskName, Date startDate, Date endDate, int priority, String status, Long userId) {
//		super();
//		this.parentId = parentId;
//		this.projectId = projectId;
//		this.taskName = taskName;
//		this.startDate = startDate;
//		this.endDate = endDate;
//		this.priority = priority;
//		this.status = status;
//		this.userId=userId;
//	}

	public Task() {
		
	}
}
