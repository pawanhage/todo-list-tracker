import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { addTodo } from '../redux';

export class AddTodoList extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.props.addTodo(event)}>
                    <FormGroup>
                        <Label for="todo">Todo</Label>
                        <Input type="textarea" name="text" id="todo" />
                    </FormGroup>
                    <Button>Add</Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (event) => {
            event.preventDefault();
            dispatch(addTodo(event.target[0].value));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodoList);