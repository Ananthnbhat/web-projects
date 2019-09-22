package com.cognizant.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	@Query("select firstName, lastName from User where user_Id =:userId")
	String getFullName(@Param("userId") Long userId);

}
