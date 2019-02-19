import React, {Component} from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'


class Note extends Component {
    edit() {
        alert('editing note')
    }
    remove() {
        alert('removing note')
    }
    render () {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaEdit /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
}

export default Note