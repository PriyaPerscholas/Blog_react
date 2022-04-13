import { createBlog } from "../services/blog_api";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function New() {
       const nav = useNavigate()
       const createTheBlog = (event) => {
              event.preventDefault()
              const newblog = {
                     title: event.target.title.value,
                     image: event.target.image.value,
                     body: event.target.body.value,
                     datePosted: event.target.datePosted.value,
                     authorName: event.target.authorName.value,
                     address: event.target.address.value,

              }
              console.log(newblog)
              createBlog(newblog)
              nav('/')

       }
       return (
              <div className="blog-new">
                     <h2>Create new Blog</h2>
                     <form onSubmit={createTheBlog} >
                            <label> Title</label>
                            <input type="text" name="title" />
                            <br /> <br />
                            <label>Image</label>
                            <input type="text" name="image" />
                            <br /> <br />
                            <label>Body</label>
                            <input type="text" name="body" />
                            <br /> <br />
                            <label>Date Posted</label>
                            <input type="text" name="datePosted" />
                            <br /> <br />
                            <label>Author Name</label>
                            <input type="text" name="authorName" />
                            <br /> <br />
                            <label>Address</label>
                            <input type="text" name="address" />
                            <br /> <br />
                            <input type="submit" />
                            <br />
                            <br />
                     </form>
              </div >
       )
}