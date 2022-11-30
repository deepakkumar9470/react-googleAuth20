import { useState , useEffect } from 'react';
import { Table} from 'react-bootstrap'
import axios from "axios";
import {FaEdit,FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Lists = () => {
     const [data,setData] = useState([])
     
     useEffect(() => {
       const fetchPosts = async () =>{
          try {
           const res =  await axios.get(`http://localhost:3500/myposts`)
           setData(res.data)
          } catch (error) {
              console.log(error)
          }
       }
       fetchPosts()
     }, [])
   
  const handleDelete = async (id) =>{
   try {
       await axios.delete(`http://localhost:3500/myposts/${id}`)
       var newposts = data.filter((item)=>{
          return item.id !== id
       }) 
       setData(newposts)
     } catch (error) {
         console.log(error)
     }
  }
     
  return (
    <>
     <Table striped bordered hover>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Desc</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                    {
                        data?.map((post,i)=>(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.desc}</td>
                                <td>
                                  <FaTrash className="icon" size={14} color="red" onClick={()=>handleDelete(post.id)}/>
                                 </td>
                                <td>
                                  <Link to={`/edit/${post.id}`} className="link">
                                    <FaEdit className="icon" size={14} color="blue"/>
                                 </Link>
                                </td>
                            
                         </tr>
                        ))
                    }
                  </tbody>
               </Table>

    </>
  )
}

export default Lists