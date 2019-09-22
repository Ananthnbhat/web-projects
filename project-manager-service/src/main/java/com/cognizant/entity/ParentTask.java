package com.cognizant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "parent_task")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
public class ParentTask {

	@Id
	@GeneratedValue(generator="parent_task_seq")
	@SequenceGenerator(name="parent_task_seq",sequenceName="PARENT_TASK_SEQ", allocationSize=1)
	@Column(name = "parent_id")
	private Long parentId;

	@Column(name = "parent_task_name")
	private String parentTaskName;


	public ParentTask(Long parentId, String parentTaskName) {
		super();
		this.parentId = parentId;
		this.parentTaskName = parentTaskName;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public String getParentTaskName() {
		return parentTaskName;
	}

	public void setParentTaskName(String parentTaskName) {
		this.parentTaskName = parentTaskName;
	}

	public ParentTask() {

	}
}
