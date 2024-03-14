import React from 'react'
import { Link } from 'react-router-dom'

const Eachpost = ({ post }) => {
    return (
        <>
            <Link to={`${post.id}`}  >
                <article className='article'  >
                    <h2>{post.title}</h2>
                    <p>{post.datetime}</p>
                    <p>{(post.body).length >=25 ? `${(post.body).slice(0,30)}...`:(post.body)}</p>
                </article>
            </Link>

        </>
    )
}

export default Eachpost