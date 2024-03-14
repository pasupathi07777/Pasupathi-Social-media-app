import React, { useEffect, useState } from 'react'
import Footers from './components/Footers';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Addpost from './components/Addpost'
import About from './components/About'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Post from './components/Post';
import Errorpage from './components/Errorpage';
import { format } from "date-fns";

// pacage name date -fns
import api from './api/server'
import Editpost from './components/Editpost';


const App = () => {

  let app_datails = {
    app_name: "Pasupathi Media",
    footer: new Date().getFullYear()
  }

  // all states 
  let [posts, setposts] = useState(
    [
      //   {
      //   id: 1,
      //   title: "python",
      //   datetime: "july  01 2021 11:17:36 AM",
      //   body: "python is a programing langrage"
      // }
      // ,
      // {
      //   id: 2,
      //   title: "my second post",
      //   datetime: "july  01 2021 11:17:36 AM",
      //   body: "made a video about ranchi"
      // },
      // {
      //   id: 3,
      //   title: "my third post",
      //   datetime: "july  01 2021 11:17:36 AM",
      //   body: "made a video about mumbai"
      // },
      // {
      //   id: 4,
      //   title: "my fourth post :4",
      //   datetime: "july  01 2021 11:17:36 AM",
      //   body: "made a video about kerela"
      // }
    ]
  )

  // search state
  let [search, setsearch] = useState('')
  let [searchresult, setsearchresult] = useState([])


  // useefferct for posts and search controll
  useEffect(() => {
    let result = posts.filter((post) => (post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) || (post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())))

    setsearchresult(result.reverse())
  }, [posts, search])

  // server api 

  useEffect(() => {
    let fetch = async () => {
      let responce = await (await api.get('/items')).data
      setposts(responce)
      console.log(responce)
    }
    fetch()
  }, [])



  // add post usestate
  let [title, setTitle] = useState("")
  let [content, setcontent] = useState("")

  // edit add post usestate
  let [edittitle, seteditTitle] = useState("")
  let [editcontent, seteditcontent] = useState("")

  // navigator
  let navigater = useNavigate()

  // add post function 

  let handlesumit = async (e) => {
    console.log(posts[posts.length - 1].id)
    e.preventDefault()
    let id = (posts.length === 0) ? 1 : Number(posts[posts.length - 1].id) + 1
    console.log(id)
    id = String(id)
    let date = format(new Date(), 'MMMM ,dd ,yyy ,pp ')

    let post = await api.post('/items', { id, title: title, datetime: date, body: content })
    console.log(post.data)
    let res = [...posts, post.data]

    setposts(res)
    setTitle("")
    setcontent("")
    navigater('/')




  }


  // delete post function
  let handledelete = async (id) => {
    id = Number(id)
    await api.delete(`/items/${id}`)
    let resule = posts.filter((post) => post.id !== id)
    setposts(resule)
    navigater('/')

  }

  let handleeditsumit = async (e, id) => {
    e.preventDefault()
    let date = format(new Date(), 'MMMM ,dd ,yyy ,pp ')
    let update = { id, title: edittitle, datetime: date, body: editcontent }
    let responce = await api.put(`/items/${id}`, update)
    console.log(responce)
    navigater('/')
    setposts(posts.map(p => p.id === id ? { ...responce.data } : p))

  }

  return (
    <div className='app'>
      <Header app_name={app_datails.app_name} />
      <Navbar search={search} setsearch={setsearch} />
      <Routes>

        <Route path='/' >
          <Route index element={<Home posts={searchresult} />} />
          <Route path=':id' element={<Post posts={searchresult} handledelete={handledelete} />} />



        </Route>
        <Route path='/Addpost' element={<Addpost handlesumit={handlesumit} title={title} setTitle={setTitle} content={content} setcontent={setcontent} />} />

        <Route path='*' element={<Errorpage />} />
        <Route path='/About' element={<About />} />
        <Route path='/edit/:id' element={<Editpost posts={posts} edittitle={edittitle} seteditTitle={seteditTitle} editcontent={editcontent} seteditcontent={seteditcontent} handleeditsumit={handleeditsumit} />} />

      </Routes>

      <Footers footer={app_datails.footer} />


    </div>
  )
}

export default App
