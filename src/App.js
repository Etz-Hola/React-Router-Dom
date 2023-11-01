import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import HomeLayout from './HomeLayout';


const App = () => {

 
  const [posts, setPosts] = useState([
    {
      id:1,
      title: 'Rocco',
      date: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum laborum, debitis fugit necessitatibus minima molestiae. Vero natus eaque excepturi dolor dignissimos numquam voluptatibus dolorum provident.'
    },
    {
      id:2,
      title: 'Ola',
      date: 'July 19, 2024 04:11:36 PM',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, aspernatur!'
    },
    {
      id:3,
      title: 'Kanas',
      date: 'September 28, 2021 01:17:36 AM',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptates incidunt inventore doloribus!'
    },
    {
      id:4,
      title: 'Muaz',
      date: 'August 17, 2020 06:55:55 PM',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptates incidunt inventore doloribus?'
    }

  ])
   const [search, setSearch] = useState('')
  const [searchResult, setSearchResult ] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postLists = posts.filter(post => post.id !== id)
    setPosts(postLists)
    navigate('/')
  }
  const handleSubmit = () => {
    
  }

  return (
      <Routes>
          <Route path='/' element={<HomeLayout />}>
              <Route index element={<Home posts={posts} />} />

              <Route path='/post' >
                  <Route index element={<NewPost
                    postTitle={postTitle}
                    setPostTitle={setPostTitle}
                    postBody={postBody}
                    setPostBody={setPostBody}
                    handleSubmit={handleSubmit}                  
                  />} />
                  <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />            
              </Route>

              <Route path='/about' element={<About/>} />
              <Route path='*' element={<Missing/>} /> 
          </Route>
      </Routes>

  )
}

export default App
