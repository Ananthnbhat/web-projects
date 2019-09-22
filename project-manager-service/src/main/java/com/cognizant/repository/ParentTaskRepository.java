package com.cognizant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cognizant.entity.ParentTask;

public interface ParentTaskRepository extends JpaRepository<ParentTask, Long>{

	@Query("select a.parentTaskName from ParentTask a where a.parentId=:parentId")
	String findNameById(@Param("parentId") Long parentId);

}
