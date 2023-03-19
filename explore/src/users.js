import React, { Component } from "react";
import Data from './data.js';
import './users.css'

class Students extends Component{
    constructor(props) {
        super(props)
        this.state = {
            students:Data ,
            name: '',
            status: '',
            search: 'id',
            isSave: false,
            active:null
        }
    }
    render() {
        const onChange = (e) => {
            const { value, name} = e.target
            this.setState({[name]:value})
        }
        const deleteUser = (id) => {
            const res = this.state.students.filter(student => student.id !== id)
            this.setState({students:res})
        }
        
        const addUser = () => {
            const newuser = {
                id: this.state.students.length + 1,
                name: this.state.name,
                status: this.state.status
            }
            this.setState({
                students: [...this.state.students, newuser],
                name: '',
                status:''})
        }
        const onFilter = (e) => {
            const{value}=e.target
            let res = Data.filter((item) =>
                `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
            this.setState({students:res})
        }
        const onSelect = (e) => {
            this.setState({search:e.target.value})
        }

        const onEdit = ({ id, name, status }, isSave) => {
            if (isSave) {
                let res = this.state.students.map((value) => value.id === this.state.active.id ?
                {...value,name:this.state.name,status:this.state.status}:value)
                this.setState({active:null,students:res})
            } else {
                this.setState({
                    name: name,
                    status:status,
                    active: { id, name, status }
                })
            }
            
        }
        return (
            <div style={{ background: 'rgb(155, 241, 90)' }} >
                <h1>Name: {this.state.name}</h1>
                <h1>status: {this.state.status}</h1>
                <input value={this.state.name} type='text' placeholder="Enter your name" name="name" onChange={onChange } />
                <input value={this.state.status} type='text' placeholder="Enter your status" name="status" onChange={onChange } />
                <button style={{background:'blue',height:'30px' ,width:'200px',borderRadius:'10px',border:'none',color:'white'}} onClick={()=>addUser(this.state.name)}>Add user</button>
                <br />
                <select onChange={onSelect}>
                    <option value='id'>ID</option>
                    <option value='name'>Name</option>
                    <option value='status'>Status</option>
                </select>
                <input type='text' placeholder="filter" onChange={onFilter} />
                <table border='1' width='100%'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.state.students.length ? (
                        
                            
                                this.state.students.map(({ id, name, status }) => {
                                    return (
                                        
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{this.state.active?.id === id ? (
                                                <input
                                                    onChange={onChange}
                                                    value={this.state.name}
                                                    type='text'
                                                    name="name"
                                                />) : (name)}
                                            </td>
                                            <td>{this.state.active?.id === id ? (
                                                <input
                                                    onChange={onChange}
                                                    value={this.state.status}
                                                    type='text'
                                                    name="status"
                                                />) : (status)}
                                            </td>
                                            <td> <button onClick={() => deleteUser(id)}>Delete</button></td>
                                            <td> <button onClick={() => onEdit({ id, name, status }, this.state.active?.id === id)}>
                                                {this.state.active?.id === id ? 'Save' : 'Edit'}
                                            </button></td>
                                        </tr>
                                    )
                                })
                                
                                ): (
                                <tr >
                                    <th colSpan={5}> 
                                   <h1>no data</h1> 
                                </th>
                                </tr>
                        
                                )}
                        
                                </tbody>
                </table>
                                </div>
        )
    }
}

export default Students;