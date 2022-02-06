import React from 'react'
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {

  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  // const params = useParams()



  return (
    <div>
      post
      <button onClick={onClick}>button</button>

      <Routes>
        <Route path ='/show' element={<h1>hello</h1>} />
      </Routes>
    </div>
  )
  
}

export default Post
