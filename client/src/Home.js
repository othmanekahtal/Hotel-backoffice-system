import { useState,useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([{id:1,title:"blog1",author:"mario",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l"},
    {id:2,title:"blog2",author:"diaz",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l"},
    {id:3,title:"blog3",author:"mario",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l"}]);
  const handleDelete=(id)=>{
      const newBlogs=blogs.filter(blog=>blog.id!==id)  
      setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('use effect')
    },[])
    return (
        <div className="Home">
        <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
    );
}



export default Home;
