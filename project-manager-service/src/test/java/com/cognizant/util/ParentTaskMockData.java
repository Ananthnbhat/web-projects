package com.cognizant.util;

import com.cognizant.entity.ParentTask;
import com.cognizant.model.ParentTaskRecord;

import java.util.ArrayList;
import java.util.List;

public class ParentTaskMockData {

    public ParentTask getSingleParentTask(){

        return new ParentTask((long)1, "DummyParentTask");
    }

    public ParentTaskRecord getParentTaskRecord(){

        return new ParentTaskRecord();
    }

    public List<ParentTask> getParentTaskList(){

        List<ParentTask> parentTaskList = new ArrayList<ParentTask>();

        parentTaskList.add(
                new ParentTask((long)1, "DummyParentTask")
        );

        parentTaskList.add(
                new ParentTask((long)2, "DummyParentTask2")
        );

        return parentTaskList;
    }
    
    public String getParentTaskListData(){

        return "DummyParentTask";
    }
}
