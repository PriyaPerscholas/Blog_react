import { getBlog, editBlog, deleteBlog } from "../services/blog_api";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useeffect, useState } from 'react'
import '../App.css'

export default function Edit() {
       const { id } = useParams()
       const nav = useNavigate()
       const [data, setData] = useState({})
       useEffect(() => {
              getBlog(id)
                     .then(res => setData(res.data))
       }, [])
       const editTheBlog = event => {
              event.preventDefault()
              const updatedBlog = {
                     title: event.target.title.value,
                     address: event.target.address.value,
                     authorName: event.target.authorName.value,
                     body: event.target.body.value,
                     datePosted: event.target.datePosted.value,
                     image: event.target.image.value
              }
              editBlog(id, updatedBlog)
              nav(`/${id}`)
       }
       return (
              <div className="blog-edit">
                     <h2>Edit The record</h2>
                     <form onSubmit={editTheBlog}>
                            <label>Title:   </label>
                            <input type="text" name="title" />
                            <br />        <br />
                            <label>Address:  </label>
                            <input type="text" name="address" />
                            <br />        <br />
                            <label>AuthorName:</label>
                            <input type="text" name="authorName" />
                            <br />        <br />
                            <label>Body: </label>
                            <input type="text" name="body" />
                            <br />        <br />
                            <label>DatePosted: </label>
                            <input type="text" name="datePosted" />
                            <br />        <br />
                            <label>Image: </label>
                            <input type="text" name="image" />
                            <br />        <br />
                            <input type="submit" />

                     </form>
              </div >
       )

}