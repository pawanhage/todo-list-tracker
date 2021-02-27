import React, { Component } from 'react'
import { deleteTodo, dislikeTodo, likeTodo } from '../redux';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'reactstrap';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

export class TodoList extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="pad25">
                    <div>
                        <div>
                            <span>{this.props.userName}</span>
                            <Button className="floatRight pad0" color="danger" onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</Button>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <p>{this.props.todo.content}</p>
                    <p className="lead">
                        <Button className="marg5" color="success" onClick={() => this.props.likeTodo(this.props.todo.id)}><AiFillLike /></Button>
                        <Button className="marg5" color="secondary" onClick={() => this.props.dislikeTodo(this.props.todo.id)}><AiFillDislike /></Button>
                        <span>{this.props.todo.liked ? 'Liked' : this.props.todo.disliked ? 'Disliked' : ''}</span>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => { dispatch(deleteTodo(id)); },
        likeTodo: (id) => { dispatch(likeTodo(id)) },
        dislikeTodo: (id) => { dispatch(dislikeTodo(id)) }
    }
}

export default connect(null, mapDispatchToProps)(TodoList);
