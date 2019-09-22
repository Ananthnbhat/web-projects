package com.cognizant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.entity.Project;


@Repository
public interface ProjectRepository extends JpaRepository<Project,Long> {

	@Modifying
	@Query("update Project set status='Y' where project_Id=:projectId")
	void suspendById(@Param("projectId") Long projectId);

	@Query("from Project where status='N'")
	List<Project> findAllProjects();

	@Query("select projectName from Project where project_id=:projectId")
	String getProjectName(@Param("projectId") Long projectId);


}
