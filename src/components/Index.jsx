import { getBlogs } from "../services/blog_api";
import { useState, useEffect } from 'react'
import '../App.css'

export default function Blogs() {
       const [data, setData] = useState([])
       useEffect(() => {
              getBlogs()
                     .then(res => setData(res.data))
       }, [])
       return (
              <div className="blog1" >
                     <h1>Travel Blog of India</h1>
                     <div className="blog-index">
                            {data.map((blog, i) => {
                                   return (
                                          <a href={`/${blog._id}`}>
                                                 <h3>{blog.title}</h3>
                                                 <img style={{ height: '250px', width: '250px', }}
                                                        src={blog.image} /></a>
                                   )
                            })}
                     </div>
              </div>
       )
}