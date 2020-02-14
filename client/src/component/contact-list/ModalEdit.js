import { Modal, Button } from 'antd';
import React, { Component } from 'react'
import '../contact-list/ModalEdit.css'
import Axios from 'axios';
class ModalEdit extends Component {
  state = { visible: false,
    name:"",
    tel:"",
    email:"",
    add:{}

}
namechange=(e)=>{
    this.setState({
        name:e.target.value
    })
}
telchange=(e)=>{
    this.setState({
        tel:e.target.value
    })
}
emailchange=(e)=>{
    this.setState({
        email:e.target.value
    })
}
addchange=()=>{
    this.setState({
        add:{name:this.state.name,tel:this.state.tel,email:this.state.email}
    }, ()=>{
        Axios.post('/new-contact', this.state.add);
        this.setState({visible:false})
    })
    
}


  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
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
        <Button type="primary" onClick={this.showModal}>add contact</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk }
          onCancel={this.handleCancel}
        >
            
        <div className="inputadd">
          <input type ="text" placeholder="   name" value={this.state.name} onChange={this.namechange}></input>
          <input type ="text" placeholder="   tel"value={this.state.tel} onChange={this.telchange}></input>
          <input type ="text" placeholder="   email" value={this.state.email} onChange={this.emailchange}></input>
          </div>
          <Button type="primary" onClick={this.addchange}>add</Button>
        </Modal>
        
      </div>
    );
  }
}

// ReactDOM.render(<ModalEdit />, mountNode);
export default  ModalEdit