import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todo, onInputChange, onAddTodo } = this.props;
        return (
            <div>
                <input
                    type="text"
                    value={ todo }
                    onChange={ onInputChange }
                />
                <span
                    onClick={ onAddTodo }
                >
                    +
                </span>
            </div>
        );
    }
}

export default TodoForm;