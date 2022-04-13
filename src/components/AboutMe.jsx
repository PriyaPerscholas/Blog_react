import { aboutBlog } from "../services/blog_api";
import { useNavigate } from "react-router-dom";

export default function About() {
       const nav = useNavigate()
       aboutBlog()
       nav('/')
       return (
              <div className="blog-about">
                     <p>This is Priya.Currently doing Software Engineering Course from PerScholas and Wilkes Community College.My aspiration to become a Software Engineer and looking for opporunities in IT industry</p>

                     <p>  I used HTML,CSS,JavaScript ,Express,Node.js and React to this project. Used Express ,Mongoose and Mongo DB on backend. Frontend using React.</p>
                     <p>My email id: priya.lkb@gmail.com</p>

              </div>

       )
}