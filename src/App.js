import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import Footer from './Footer'

const App = () => {

  const [search, setSearch] = useState('')
  const [post, setPost] = useState([
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
  const [searchResult, setSearchResult] = useState([])

  return (
    <div className='App'>
      <Header title='DLT Student Blog'/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<NewPost/>} />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Missing/>} />        
      </Routes>

      <Footer/>

    </div>
  )
}

export default App