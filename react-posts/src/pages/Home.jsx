
import React,{useState,useEffect} from 'react'
import './home.css'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
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
  return (
    <div className="home">

        {
            data.map((post,i)=>(
                <Card key={i} post={post}/>
            ))
        }

    </div>
  )
}

export default Home