import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>

        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>
                Search Post
            </label>

            <input type='text' id='search' placeholder='Search Posts' value={search} onChange={(e) => 
            setSearch(e.target.value)} />
        </form>
        <ul>
            
        </ul>

    </nav>
  )
}

export default Nav