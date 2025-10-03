import { useEffect, useState } from "react"
import {Modal,Button,Form} from 'react-bootstrap'

export default function PopupForm(){
    const [showmodal,setShowModal]=useState(false)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setShowModal(true)
        },5000)
        return ()=>clearTimeout(timer)
    },[])

 const handleClose=()=>setShowModal(false)
 const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Form submitted!")
    handleClose()
 }
    return(
<>

<Modal show={showmodal} onHide={handleClose} centered>
    <Modal.Header closeButton>
        <Modal.Title  className="  d-flex justify-content-center  ">Register Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control type="text" required/>
            </Form.Group>
              <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required
         placeholder="your Email"/>
          </Form.Group>
           <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel"  
              placeholder="+91 123456789"required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
  <Form.Label>Message</Form.Label>
  <Form.Control as="textarea" rows={4} placeholder="Enter your message here..." required />
</Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" className="rounded-pill">Submit</Button>
            
          </div>
        </Form>
    </Modal.Body>
</Modal>

</>
    )
}