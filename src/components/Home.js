import React from 'react'
import Feed from './Feed'



const Home = ({posts}) => {

  return (
    
    <div className='home'>
       {posts.length?<Feed posts={posts}  />:<p className='no-post'>post not found</p>}
    </div>
  )
}

export default Home