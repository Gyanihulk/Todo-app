import React,{Component}   from "react";
import {BrowserRouter as Router ,Route,Routes ,Link } from 'react-router-dom';
import './bootstrap.css'


class ListTodosComponent extends Component{
    constructor (props){
        super(props)
        this.state={
            todo : [
                {id:1,description: 'Learn React', done:false ,targetDate: new Date()},
            {id:2,description: 'Learn java',done:false ,targetDate: new Date()},
            {id:3,description: 'Learn spring',done:false ,targetDate: new Date()}
            ]
        }
    }

    render(){
        return(
            <div>
                <h1> List Todos</h1>
                <div class="containers">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>desciption</th>
                                <th>Is completed?</th>
                                <th>Target date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.todo.map ( 
                            todo => 
                            <tr key ={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>


                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent