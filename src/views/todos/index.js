import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import todoActionCreators from '../../redux/todos/actions';

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todos">

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(todoActionCreators, dispatch)
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todos));