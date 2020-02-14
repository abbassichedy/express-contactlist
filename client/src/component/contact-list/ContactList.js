import React, { Component } from 'react'
import axios from "axios"
import "../contact-list/ContactList.css"
import { Button } from 'antd';
import ModalEdit2 from './ModalEdit2';

export default class ContactList extends Component {
    state = {
        contactList: []
    }
    componentDidMount = () => {
        this.getList()
    }
    getList = () => {
        axios.get("/list-contact").then(res => {
            this.setState({
                contactList: res.data
            })
        })
    }
    deletclick=(id)=>{

        axios.delete('/delete_product/'+ id)
    }
        
    
    render() {
        return (
            <div className="box-generale">
                {this.state.contactList.map((el, i) => (
                    <div className="box">
                        <div>  name: <span>{el.name}</span></div>
                        <div> tel: <span>{el.tel}</span></div>
                        <div className="email"><span> email:</span><p>{el.email}</p></div>
                        <div className="edit+sup">
                            <ModalEdit2   el={el}/>
                            <Button type="danger" onClick={()=>this.deletclick(el._id)}>Delete</Button>

                        </div>


                    </div>

                ))}
            </div>
        )
    }
}


