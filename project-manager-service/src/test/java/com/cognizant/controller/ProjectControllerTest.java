package com.cognizant.controller;

import com.cognizant.entity.Project;
import com.cognizant.model.ProjectRecord;
import com.cognizant.model.ProjectTaskRecord;
import com.cognizant.service.ProjectService;
import com.cognizant.util.ProjectMockData;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
public class ProjectControllerTest {

    @InjectMocks
    public ProjectController projectController;

    @Mock
    public ProjectService projectService;

    @Test
    public void saveProjectTest(){

        Mockito.when(projectService.saveProject(Mockito.any(ProjectRecord.class))).thenReturn(new ProjectMockData().getProjectRecord());
        ProjectRecord output = projectController.saveProject(new ProjectMockData().getProjectRecord());

        Assert.assertEquals(new ProjectMockData().getProjectRecord().getProjectName(), output.getProjectName());
        Assert.assertEquals(new ProjectMockData().getProjectRecord().getStartDate(), output.getStartDate());
    }

    @Test
    public void getAllProjectRecordsTest(){

        Mockito.when(projectService.findAllProjects()).thenReturn(new ProjectMockData().getProjectList());
        List<Project> output = projectController.getAllProjectRecords();

        Assert.assertEquals(2, output.size());
    }
    
    @Test
    public void getAllProjectsTest(){

        Mockito.when(projectService.findAllRecords()).thenReturn(new ProjectMockData().getProjectTaskList());
        List<ProjectTaskRecord> output = projectController.getAllProjects();

        Assert.assertEquals(2, output.size());
    }

    @Test
    public void updateProjectTest(){

        Mockito.when(projectService.updateProject(Mockito.any(Project.class), Mockito.anyLong())).thenReturn(new ProjectMockData().getSingleProject());
        Project output = projectController.updateProject(new ProjectMockData().getSingleProjectWithoutProjectId(),(long)1);

        Assert.assertEquals(new ProjectMockData().getSingleProject().getProjectId(), output.getProjectId());
    }

    @Test
    public void deleteProjectTest(){

        Mockito.when(projectService.deleteProject(Mockito.anyLong())).thenReturn("deleted project successfully");
        String output = projectController.deleteProject((long)1);

        Assert.assertEquals("deleted project successfully", output);
    }
}
