package com.cognizant.model;

public class ParentTaskRecord {
	
	public long id;
	public String taskName;
	public TaskRecord task;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public TaskRecord getTask() {
		return task;
	}
	public void setTask(TaskRecord task) {
		this.task = task;
	}
	
	
	
}
