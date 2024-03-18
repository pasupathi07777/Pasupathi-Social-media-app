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
import { Dataprovider } from './Providerbox/Datacontex';

// pacage name date -fns
// import api from './api/server'
import Editpost from './components/Editpost';


const App = () => {

  let app_datails = {
    app_name: "Pasupathi Media",
    footer: new Date().getFullYear()
  }

  // all states 
  let [posts, setposts] = useState(
    [
      
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
      let responce = JSON.parse(localStorage.getItem("socialmedia")) || []
      setposts(responce)
    

      //  await (await api.get('/items')).data ||
    }
    fetch()
  }, [])



  // add post usestate
  let [title, setTitle] = useState("")
  let [content, setcontent] = useState("")

  // edit add post usestate
  let [edittitle, seteditTitle] = useState("")
  let [editcontent, seteditcontent] = useState("")
  

  // img state
  let [img,setimg]=useState("")
  let [editimg,seteditimg]=useState("")

  // navigator
  let navigater = useNavigate()

  // add post function 

  let handlesumit = async (e) => {
    e.preventDefault()
    
    
    let id = (posts.length === 0) ? 1 : Number(posts[posts.length - 1].id) + 1
    console.log(id)
    id = String(id)
    let date = format(new Date(), 'MMMM ,dd ,yyy ,pp ')
    let datas= { id,img:img, title: title, datetime: date, body: content }

   
    
    // let res = [...posts, post.data]
    let res = [...posts, datas]
    localStorage.setItem("socialmedia",JSON.stringify(res));

    setposts(res)
    setTitle("")
    setcontent("")
    navigater('/')
    setimg('')


  //   await api.post('/items', { id, title: title, datetime: date, body: content }) || 

  }


  // delete post function
  let handledelete = async (id) => {
    // id = Number(id)
    // await api.delete(`/items/${id}`) 
    let resule = posts.filter((post) => post.id !== id)
    setposts(resule)
    navigater('/')
    localStorage.setItem("socialmedia",JSON.stringify(resule));

  }

  let handleeditsumit = async (e, id) => {
    e.preventDefault()
    let date = format(new Date(), 'MMMM ,dd ,yyy ,pp ')
    let update = { id,img:editimg,title: edittitle, datetime: date, body: editcontent }

    let responce = JSON.parse(localStorage.getItem("socialmedia"))
    console.log(responce)
    responce=responce.filter((a)=>(a.id!==id))
    responce=[...responce,update]
    // let responce = await api.put(`/items/${id}`, update) || []
    console.log(responce)
    navigater('/')
    setposts(responce)
    seteditimg('')
    seteditTitle("")
    seteditcontent("")
    // setposts(posts.map(p => p.id === id ? { ...responce.data } : p))

    localStorage.setItem("socialmedia",JSON.stringify(responce));
    

  }


  
  

  return (
    <div className='app'>
      <Dataprovider>
      <Header app_name={app_datails.app_name} />
      <Navbar search={search} setsearch={setsearch} />
      <Routes>

        <Route path='/' >
          <Route index element={<Home posts={searchresult} img={img} />} />
          <Route path=':id' element={<Post posts={searchresult} handledelete={handledelete} />} />



        </Route>
        <Route path='/Addpost' element={<Addpost handlesumit={handlesumit} title={title} setTitle={setTitle} content={content} setcontent={setcontent} img={img} setimg={setimg} />} />

        <Route path='*' element={<Errorpage />} />
        <Route path='/About' element={<About />} />
        <Route path='/edit/:id' element={<Editpost posts={posts} edittitle={edittitle} seteditTitle={seteditTitle} editcontent={editcontent} seteditcontent={seteditcontent} editimg={editimg} seteditimg={seteditimg} handleeditsumit={handleeditsumit} />} />

      </Routes>

      <Footers footer={app_datails.footer} />
      </Dataprovider>
     


    </div>
  )
}

export default App
