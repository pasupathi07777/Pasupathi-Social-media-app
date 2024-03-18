// import React, { useState } from 'react'

const Addpost = ({ handlesumit, title, setTitle, content, setcontent, img, setimg }) => {
  function imgs(e) {
    setimg(URL.createObjectURL(e.target.files[0]))
    console.log(img)

  }


  return (
    <div className='addpost'>
      <form action="" onSubmit={handlesumit} className='addpost-form'>
        <h2>Add Post</h2>
        <div className="img-box">
        {img&& <img src={img} alt=""  />}
        {!img&& <p>uplode image</p>}

        </div>
        <input type="file" accept='' id='file-img' onChange={imgs}  />
        <label htmlFor="file-img" className='img-lable' >Add-image</label>


        
        <input type="file" accept='' id='file-img' onChange={imgs} />
        {/* <label htmlFor="file-img" className='img-lable' >
        <div className="img-box">
          {img && <img src={img} alt="" />}
          {!img && <p>uplode image</p>}

        </div>
        </label> */}

        <label htmlFor="Title">Title:</label>
        <input type="text" id='add-input' value={title} required onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="Content">Content:</label>

        <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => setcontent(e.target.value)}></textarea>
        <button type="submit">Add</button>


      </form>
    </div>
  )
}

export default Addpost