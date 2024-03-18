import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Editpost = ({ posts, edittitle, seteditTitle, editcontent, seteditcontent, editimg, seteditimg, handleeditsumit }) => {
  let { id } = useParams()

  let post = posts.find(p => p.id === id)


  // useEffect(() => {
  //   seteditTitle(post.title)
  //   seteditcontent(post.body)

  // })


  function editimgs(e) {
    seteditimg(URL.createObjectURL(e.target.files[0]))

  }
  return (
    <div className='addpost'>
      <form action="" onSubmit={(e) => handleeditsumit(e, post.id)} className='addpost-form'>
        <h2>Edit Post</h2>
        <div className="img-box">
          {editimg && <img src={editimg} alt="" />}
          {!editimg && <p>uplode image</p>}

        </div>
        <input type="file" accept='' id='file-img' onChange={editimgs} />
        <label htmlFor="file-img" className='img-lable' >Add-image</label>
        <label htmlFor="Title">Title:</label>
        <input type="text" id='add-input' value={edittitle} onChange={(e) => seteditTitle(e.target.value)} />
        <label htmlFor="Content">Content:</label>

        <textarea name="" id="" cols="30" rows="10" value={editcontent} onChange={(e) => seteditcontent(e.target.value)}></textarea>
        <button type="submit">edit</button>


      </form>
    </div>
  )
}

export default Editpost