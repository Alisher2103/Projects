import React, { Component } from "react";
import Input from '../Generics/Input/index.jsx';
import Button from '../Generics/Button/index.jsx';
import './index.css'

class Budget extends Component{
    constructor(props) {
        super(props)
        this.state = {
            totalAmount: null,
            isOnClick: false,
            balance: null,
            product: '',
            price: 0,
            expense:0,
            lists: []
        }
    }
    render() {
        const onChange = (e) => {
            const { name, value } = e.target
            this.setState({...this.state,balance:value,[name]:value})
        }
        const onClick = () => {
            this.setState({...this.state,isOnClick:true})
        }
        const checkAmount = () => {
            const newitem = { id: this.state.lists.length + 1, name: this.state.product ,price: +this.state.price }
            this.setState({...this.state,lists:[...this.state.lists,newitem]})
        }
        const deleteProduct = (id) => {
            const res = this.state.lists.filter(products=> products.id !== id)
            this.setState({lists: res})
        }
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="main">
                        <div className="box">
                            <h2>Budget</h2>
                            <Input value={this.state.totalAmount} onChange={onChange} type='number' name='totalAmount' placeholder='Enter Total Amount' />
                            <Button onClick={onClick}>Set Budget</Button>
                        </div>
                        <div className="box">
                        <h2>Expenses</h2>
                        <Input name='product' onChange={onChange} type='text' placeholder='Enter Title of Product' />
                        <Input type='number' onChange={onChange} name='price' placeholder='Enter Cost of Product' />
                            <Button onClick={checkAmount}>Check Amount</Button>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="middle_item">
                            <h4>Total Budget</h4>
                            <p>{(this.state.isOnClick && this.state.totalAmount) || 0 }</p>
                        </div>
                        <div className="middle_item">
                        <h4>Expenses</h4>
                            <p>{this.state.lists.reduce((sum,item)=>sum+item.price,0)||0 }</p>
                        </div>
                        <div className="middle_item">
                        <h4>Balance</h4>
                            <p>{(this.state.isOnClick && this.state.totalAmount-this.state.lists.reduce((sum,item)=>sum+item.price,0)) || 0}</p>
                        </div>
                    </div>
                    <div style={{marginBottom:'500px'}} className="expense_list">
                        <h4>Expense List</h4>
                        {
                            this.state.lists.map((item) => (
                                <div key={item.id}>{item.id}-{item.name}-{item.price } - <button onClick={()=>deleteProduct(item.id)}>Delete</button></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Budget;