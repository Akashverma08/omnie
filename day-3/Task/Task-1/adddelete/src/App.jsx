import {useEffect,useState} from "react";
import axios from "axios";

const App=()=>{
  const [users,setUser]=useState([]); //display purpose 


  const [name,setName]=useState("");// add karega name
  const [email,setEmail]=useState(""); //add karega email
  const [city,setCity]=useState(""); //add karega city 
  const [cname,setCname]=useState(""); //add company name

  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res)=> setUser(res.data));
  },[])

  const deleteUser=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(()=>{
          const remainUser=users.filter((user)=>user.id !==id);
          setUser(remainUser);
         })
  }

  const addUser=()=>{ //addUser trigger karega jab button onClick trigger hoga
    axios.post("https://jsonplaceholder.typicode.com/users/",{  
      name:name,
      email:email,
      address:{
        city:city
      },
      company:{
        name:cname
      }
    })
    .then((res)=>{
      setUser([...users,res.data]); //use spread to combine previous data with the input data show on display 
      setName("");  //
      setEmail("");
      setCity("");

    })

  }

  return (
    <div>
      <h2>Add User</h2>
     
      <h2>Users</h2>
      <input
       type="text"
       placeholder="enter you name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
      />

      <input
       type="email"
       placeholder="enter email"
       value={email}
       required
       onChange={(x)=>setEmail(x.target.value)}
      />
      
      <input
       type="text"
       placeholder="enter city"
       value={city}
       required
       onChange={(x)=>setCity(x.target.value)}
      />
      <input
       type="text"
       placeholder="enter your company name"
       value={cname}
       onChange={(e)=>setCname(e.target.value)}
      />

      <button onClick={addUser} >Add</button>
      
      {users.map((user)=>(
        <div >
          <p>ID:{user.id}</p>
          <p>name : {user.name}</p>
          <p>email: {user.email}</p>
          <p>city: {user.address.city}</p>
          <p>company: {user.company.name}</p>
          <button onClick={()=>deleteUser(user.id)}>Delete</button>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default App;