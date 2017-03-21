import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, createdAt }) => (
    <li
        onClick={onClick}
        style={{
        textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text} - [{createdAt}]
        <br/>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.string
}

export default Todo
