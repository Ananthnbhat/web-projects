package com.cognizant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
	
	@Modifying
	@Query("UPDATE Task SET STATUS='complete' WHERE task_id= :taskId")
	void suspendById(@Param("taskId") Long taskId);

	@Query("from Task where project_id= :projectId and status!='suspend'")
	List<Task> getTaskBySearch(@Param("projectId") Long projectId);
	
	@Query("select count(task_id) as task_id from Task where project_id=:projectId")
	Long getTaskIdCount(@Param("projectId") Long projectId);
	
	@Query("select SUM( CASE WHEN status = 'complete' THEN 1 ELSE 0 END ) as status from Task where project_id=:projectId")
	Long getStatusCompletedCount(@Param("projectId") Long projectId);

	@Modifying
	@Query("update Task set status='suspend' where project_Id=:projectId")
	void suspendtaskById(@Param("projectId") Long projectId);

}
