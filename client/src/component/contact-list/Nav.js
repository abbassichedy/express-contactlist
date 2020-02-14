import React, { Component } from 'react'
import '../contact-list/Nav.css'
import { Button } from 'antd';
import ModalEdit from './ModalEdit'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <p>contact list</p>
                {/* <Button type="primary" onClick={()=><ModalEdit/>} >add contact </Button> */}
                <ModalEdit/>
                {/* <ModalEedit/> */}
                <span>this is the contact page</span>
                
            </div>
        )
    }
}
