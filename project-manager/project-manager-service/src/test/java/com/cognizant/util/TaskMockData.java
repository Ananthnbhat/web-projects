package com.cognizant.util;

import com.cognizant.entity.Task;
import com.cognizant.model.TaskRecord;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class TaskMockData {

	public TaskRecord getTaskRecord() {
		
		TaskRecord task=new TaskRecord();
		task.setTaskName("DummyTask");
		task.setStartDate(java.sql.Date.valueOf(LocalDate.parse("2019-04-02")));
		task.setEndDate(java.sql.Date.valueOf(LocalDate.parse("2019-04-03")));
		task.setPriority(1);
		task.setStatus("New");
		task.setUserId(1L);
		task.setUserName("DeummyName");
		task.setParentTaskId(1L);
		task.setParentName("Task1");
		task.setProjectId(1L);
		task.setProjectName("Dummy Project");

		return task;
	}

	public Task getSingleTask() {

		return new Task((long) 1, (long) 1, (long) 1, "DummyTask", java.sql.Date.valueOf(LocalDate.parse("2019-04-02")),
				java.sql.Date.valueOf(LocalDate.parse("2019-04-03")), 1, "New", (long) 1);
	}

	public List<Task> getTaskList() {

		List<Task> taskList = new ArrayList<>();

		taskList.add(new Task((long) 1, (long) 1, (long) 1, "DummyTask",
				java.sql.Date.valueOf(LocalDate.parse("2019-04-02")),
				java.sql.Date.valueOf(LocalDate.parse("2019-04-03")), 1, "New",(long) 1));

		taskList.add(new Task((long) 2, (long) 2, (long) 1, "DummyTask2",
				java.sql.Date.valueOf(LocalDate.parse("2019-04-02")),
				java.sql.Date.valueOf(LocalDate.parse("2019-04-03")), 1, "New",(long) 1));

		return taskList;
	}

	public List<TaskRecord> getTaskBySearchList() {

		List<TaskRecord> taskList = new ArrayList<>();
		TaskRecord t=new TaskRecord();
		t.setParentName("DummyTask");
		t.setStartDate(java.sql.Date.valueOf(LocalDate.parse("2019-04-02")));
		t.setEndDate(java.sql.Date.valueOf(LocalDate.parse("2019-04-03")));
		t.setPriority(1);
		t.setStatus("New");
		t.setUserId(1L);
		t.setUserName("DeummyName");
		t.setParentTaskId(1L);
		t.setParentName("Task1");
		t.setProjectId(1L);
		t.setProjectName("Dummy Project");
		taskList.add(t);

		return taskList;
	}

	public Long getNoOfTasks() {
		return 1L;
	}

	public Long getCompletedTasks() {
		return 1L;
	}

	public Long getStatusCompletedCount() {
		return 1L;
	}

}
