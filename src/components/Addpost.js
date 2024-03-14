import React from 'react'

const Addpost = ({handlesumit,title,setTitle,content,setcontent}) => {
  return (
    <div className='addpost'>
      <form action="" onSubmit={handlesumit} className='addpost-form'>
        <h2>Add Post</h2>
        <label htmlFor="Title">Title:</label>
        <input type="text" id='add-input' value={title} required onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="Content">Content:</label>
        
        <textarea name="" id="" cols="30" rows="10"  value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
        <button type="submit">Add</button>


      </form>
    </div>
  )
}

export default Addpost