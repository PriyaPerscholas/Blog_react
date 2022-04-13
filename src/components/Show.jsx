import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getBlog, deleteBlog } from "../services/blog_api"

import '../App.css'

export default function Blog() {
       const nav = useNavigate()
       const { id } = useParams()
       const [data, setData] = useState({})
       const [comments, setComments] = useState([])
       useEffect(() => {
              getBlog(id)
                     .then(res => {
                            setData(res.data)
                            setComments(res.data.comments)
                     })
       }, [])
       const deleteTheBlog = () => {
              deleteBlog(id)
              nav('/')
       }
       return (
              <div className="blog-show">
                     <h2>{data.title}</h2>
                     <img src={data.image} />
                     <p>{data.body}</p>
                     <h4>Address: {data.address}</h4>
                     <h4>Date: {data.datePosted}</h4>
                     <h4>Author: {data.authorName}</h4>

                     <button onClick={() => { nav(`/${id}/edit`) }}>Edit the Blog</button>
                     <br /><br />

                     <button onClick={deleteTheBlog}> Delete blog</button>
                     <h2>Comments</h2>
                     {comments.map((comment) => {
                            return (
                                   <div>
                                          <h4>Name: {comment.name}</h4>
                                          <h4>Comment: {comment.message}</h4>
                                   </div>
                            )
                     })}
              </div>

       )
}