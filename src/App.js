import './App.css';
import { setAddTodoFormState } from './features/todo-list/redux';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Component } from 'react';
import TodoList from './features/todo-list/components/TodoList';
import { AddTodoList } from './features/todo-list/components/AddTodoList';

const ShowTodoList = (props) => {
    let allTodoList;
    if (props.todoList && props.todoList.length > 0) {
        allTodoList = props.todoList.map(item => {
            return <TodoList key={item.id} userName={props.userName} todo={item}></TodoList>
        })
    } else {
        allTodoList = <> </>
    };

    return allTodoList;
}

export class App extends Component {
    render() {
        return (
            <div className="pad30">
                <Navbar className="margBottom20" color="light" light expand="md">
                    <NavbarBrand href="/">TODO List Tracker</NavbarBrand>
                </Navbar>
                <div className="margBottom20">
                    <Button color="primary" hidden={this.props.addTodoFormState} onClick={() => this.props.setAddTodoFormState(true)}>Add TODO Task</Button>
                    {this.props.addTodoFormState ? <AddTodoList></AddTodoList> : <></>}
                </div>
                <ShowTodoList userName={this.props.userName} todoList={this.props.todoList} ></ShowTodoList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addTodoFormState: state.todoListReducer.addTodoFormState,
        todoList: state.todoListReducer.todoList,
        userName: state.todoListReducer.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddTodoFormState: (flag) => { dispatch(setAddTodoFormState(flag)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
