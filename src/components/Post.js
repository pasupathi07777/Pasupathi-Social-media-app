import React from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

const Post = ({ posts, handledelete }) => {
  let { id } = useParams()
  console.log(posts)
  let result = posts.find((post) => (post.id === id))
  console.log(result)
  return (
    <div className='post-page'>
      {result && <article className='article'  >
      {result.img &&  <div className="img-box" >
                        <img src={result.img} alt="" />

                    </div>}
        <h2>{result.title}</h2>
        <p>{result.datetime}</p>
        <p>{result.body}</p>
        <Link to={`/edit/${result.id}`}><button type="button" >edit</button></Link>
        <button type="button" onClick={() => handledelete(result.id)}>Delete</button>
        
      </article>}
    </div>



  )
}

export default Post