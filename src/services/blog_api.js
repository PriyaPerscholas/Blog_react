import axios from "axios"
import '../App.css'

export function getBlogs() {
       const response = axios.get(`http://localhost:3001/blog`)
       return response
}
export function getBlog(id) {
       const response = axios.get(`http://localhost:3001/blog/${id}`)
       return response
}
export function deleteBlog(id) {
       const response = axios.delete(`http://localhost:3001/blog/${id}`)
       return response
}

export function createBlog(add) {
       const response = axios.post(`http://localhost:3001/blog/`, add)
       return response
}
export function editBlog(id, updatedBlog) {
       const URL = `http://localhost:3001/blog/${id}`
       const response = axios.put(URL, updatedBlog)
       return response
}
export function aboutBlog() {
       const response = axios.get(`http://localhost:3001/blog/aboutme`)
       return response
}

