import React from 'react'
import BlogCard from "./BlogCard"
import Back from '../common/back/Back'
import "./blog.css"


const Blog = () => {
  return (
    <div>
        <Back title="Blog Posts"/>
        <div className="blog padding">
            <div className="container grid2">
            <BlogCard/>
            </div>
        </div>
    
    </div>
  )
}

export default Blog
