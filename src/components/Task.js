import React from 'react'
import { Header, Icon, Grid, Segment, Button, Label } from 'semantic-ui-react';

export default function Task(props) {
    const { task, deleteTask } = props;  
    const { idTask, taskName, categoryTask } = task;

    if(task.length === 0)
    {
        return null;
    }

  return (
    <Grid.Column width={8} className='task-container'>
        <Segment>
            {
                categoryTask && (
                    <Label color="teal" ribbon="right">
                        {categoryTask}
                    </Label>
                )
            }

            <Header as="h3" className='header-task' textAlign='center'>
                {taskName}
            </Header>
            <Header as="h5" textAlign='center'>{idTask}</Header>
            <Grid columns={2} textAlign='center'>
                <Grid.Column textAlign='center'>
                    <Button color='red' onClick={() => deleteTask(idTask)}>
                        <Icon name='remove circle' /> Eliminar
                    </Button>
                </Grid.Column>

            </Grid>
        </Segment>
    </Grid.Column>
  )
}
