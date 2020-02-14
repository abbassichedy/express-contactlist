import { Modal, Button } from 'antd';
import React, { Component } from 'react'
import '../contact-list/ModalEdit2.css'
import axios from 'axios';

class ModalEdit2 extends Component {
    state = {
        visible: false,
        name: this.props.el.name,
        tel: this.props.el.tel,
        email: this.props.el.email,
        newlist: {}
    }

    // getfunction=()=>{
    //     this.setState({
    //         name:this.props.el.name,
    //         tel:this.props.el.tel,
    //         email:this.props.el.email
    //     }) 
    // }
    savefunction = () => {
        this.setState({
            newlist: {
                name: this.state.name,
                tel: this.state.tel,
                email: this.state.email
            }
        })
    }
    namechange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    telchange = (e) => {
        this.setState({
            tel: e.target.value
        })
    }
    emailchange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (id) => {
        
        this.savefunction()
        this.setState({
            visible: false,
        },()=>{axios.put('/modify_products/'+id,this.state.newlist)});
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>EDIT</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={()=>this.handleOk(this.props.el._id)}
                    onCancel={this.handleCancel}
                >
                    <div className="inputadd">
                        <input type="text" value={this.state.name} onChange={this.namechange}></input>
                        <input type="text" value={this.state.tel} onChange={this.telchange}></input>
                        <input type="text" value={this.state.email} onChange={this.emailchange}></input>
                    </div>
                </Modal>
            </div>
        );
    }
}

// ReactDOM.render(<App />, mountNode);
export default ModalEdit2