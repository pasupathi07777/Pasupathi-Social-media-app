import React from 'react'
import { Link } from 'react-router-dom'

const Eachpost = ({ post }) => {
    return (
        <>
            <Link to={`${post.id}`}  >
                <article className='article'  >
                 <p>{(post.body).length >= 25 ? `${(post.body).slice(0, 30)}...` : (post.body)}</p>
                    {post.img &&  <div className="img-box" >
                        <img src={post.img} alt="" />

                    </div>}
                    <h2>{post.title}</h2>
                    <p>{post.datetime}</p>
                    
                </article>
            </Link>

        </>
    )
}

export default Eachpost