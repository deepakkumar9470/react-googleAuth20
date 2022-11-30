
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Alert } from 'react-bootstrap'
import axios from "axios";
import Home from "../pages/Home";
import { Link, useParams, useNavigate } from 'react-router-dom'

const EditPost = () => {
   const [post, setPost] = useState({
      title: "",
      desc: ""
   });

   const [status, setStatus] = useState();

   const { id } = useParams()

   const navigate = useNavigate()

   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const res = await axios.get(`http://localhost:3500/myposts/${id}`)
            console.log(res.data)
            setPost(res.data)
         } catch (error) {
            console.log(error)
         }
      }
      fetchPosts()
   }, [id])

   function onTextFieldChange(e) {
      setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }

   async function onFormSubmit(e) {
      e.preventDefault()
      try {
         const res = await axios.put(`http://localhost:3500/myposts/${id}`, post)
         navigate('/')
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
               <Alert variant="info" ><h5>Edit Post</h5></Alert>
               <Form>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                     <Form.Label>Title</Form.Label>
                     <Form.Control name="title"
                        value={post.title}
                        type="text" placeholder="Enter Title"
                        onChange={e => onTextFieldChange(e)} />

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDesc">
                     <Form.Label>Description</Form.Label>
                     <Form.Control name="desc"
                        value={post.body}
                        type="text" placeholder="Description"
                        onChange={e => onTextFieldChange(e)} />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={e => onFormSubmit(e)}>
                     Update
                  </Button>

                  <Link to="/" className="link"> <Button variant="primary">
                     Back To Home
                  </Button></Link>
               </Form>

            </Col>

            <Col xs={10} md={6}>

            </Col>
         </Row>


      </Container>
   )
}

export default EditPost