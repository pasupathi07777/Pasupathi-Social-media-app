import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Editpost = ({posts,edittitle,seteditTitle,editcontent,seteditcontent,handleeditsumit}) => {
    let {id}=useParams()
    console.log(id)
    let post=posts.find(p=>p.id==id)
    console.log(post)

    useEffect(()=>{
        seteditTitle(post.title)
        seteditcontent(post.body)

    },[])
  return (
    <div className='addpost'>
    <form action="" onSubmit={(e)=>handleeditsumit(e,post.id)} className='addpost-form'>
      <h2>Edit Post</h2>
      <label htmlFor="Title">Title:</label>
      <input type="text" id='add-input' value={edittitle} required onChange={(e)=>seteditTitle(e.target.value)}/>
      <label htmlFor="Content">Content:</label>
      
      <textarea name="" id="" cols="30" rows="10" value={editcontent}   onChange={(e)=>seteditcontent(e.target.value)}></textarea>
      <button type="submit">Add</button>


    </form>
  </div>
  )
}

export default Editpost