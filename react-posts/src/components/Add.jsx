
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Table ,Alert} from 'react-bootstrap'
import axios from "axios";
import Home from "../pages/Home";
import Lists from './Lists';


const AddPost = () => {
   const [post, setPost] = useState({
      title: "",
      desc: ""
   });
   const [status, setStatus] = useState();

   function onTextFieldChange(e) {
      setPost((prev) => ({...prev, [e.target.name]: e.target.value}))
   }

   async function onFormSubmit(e) {
      e.preventDefault()
      try {
         await axios.post(`http://localhost:3500/myposts`, post)
         setStatus(true);
      } catch (error) {
         console.log("Something is Wrong");
      }
   }
   if (status) {
      return <Home />
   }
   return (
      <Container fluid>

         <Row>
            <Col xs={10} md={6}>
               <Alert variant="info" ><h5>Add Post</h5></Alert>
               <Form>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                     <Form.Label>Title</Form.Label>
                     <Form.Control name="title" type="text" placeholder="Enter Title"
                        onChange={e => onTextFieldChange(e)} />

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDesc">
                     <Form.Label>Description</Form.Label>
                     <Form.Control name="desc" type="text" placeholder="Description"
                        onChange={e => onTextFieldChange(e)} />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={e => onFormSubmit(e)}>
                     Submit
                  </Button>
               </Form>

            </Col>

            <Col xs={10} md={6}>
            <Alert variant="info" ><h5>Post Lists</h5></Alert>
              <Lists/>
            </Col>
         </Row>


      </Container>
   )
}

export default AddPost