import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todo: ''
        };
    }

    handleInputChange(e) {
        this.setState({
            todo: e.target.value
        });
    }

    handleAddTodo() {
        const { onAddTodo } = this.props;
        // onAddTodo({
        //     id: new Date()*1,
        //     content: this.todo,
        //     isDeleted: false,
        //     isFinish: false
        // });
        onAddTodo(this.todo);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={ this.todo }
                    onChange={ this.handleInputChange.bind(this) }
                />
                <span
                    onClick={ this.handleAddTodo.bind(this) }
                >
                    +
                </span>
            </div>
        );
    }
}