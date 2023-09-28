import React from 'react'
import "./blog.css"
import { blog } from '../../dummydata'


const BlogCard = () => {
  return (
    <div>
      {blog.map((val)=>{
       return (<div className="items shadows">
            <div className="img">
        <img src={val.cover} alt='' />
            </div>
            <div className="text">
                <div className="admin flexSB">
                    <span>
                    <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                    <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                    <label htmlFor=''>{val.com}</label>
                    </span>
                </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
            </div>
        </div>
       )
      })}
    </div>
  )
}

export default BlogCard
