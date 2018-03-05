import React, {Component} from 'react';

class TodoItems extends Component {
    render() {
        return (
            <li className="TodoItems">
                <b>{this.props.todo.title}</b>
            </li>
        );
    }
}

export default TodoItems;
