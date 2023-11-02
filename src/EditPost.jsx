import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({ posts, handleEdit, editBody, editTitle, setEditBody, setEditTitle }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post, setEditTitle, setEditBody])
  return (
    <div>

    </div>
  )
}

export default EditPost