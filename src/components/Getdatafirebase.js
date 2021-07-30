import React,{ useState} from 'react';
import axios from 'axios';

function Getdatafirebase() {
    const [data, setdata] = useState({
        username:'',
        fullname:'',
        password:''
    })
    // useEffect(() => {
    //     axios.post("https://sesha-users-default-rtdb.firebaseio.com/")
    //     .then(response => setdata(response.data))
        
    // }, [])
    const {username,fullname,password}=data;

    const chnageHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }

   

   const senddata=(e)=>{
       e.preventDefault();
       console.log(data);
       axios.post("https://practice1-signupdata-default-rtdb.firebaseio.com/filetwo.json",data)
       .then(()=>alert("submited sucessfully"))
       .catch(()=>alert("not submitted"))
    //    axios.post("https://sesha-users-default-rtdb.firebaseio.com/newfile",data)
    //    .then(()=>alert("submited"))
    //    .catch(()=>alert("not submited"))
   }
    return (
        <div>
            <h1>formsubmit</h1>
            <form onSubmit={senddata}>
           <input type="text" onChange={chnageHandler} name="username" value={username}/><br/>
           <input type="text" onChange={chnageHandler} name="fullname" value={fullname} /> 
           <br/>
           <input type="password" onChange={chnageHandler} name="password" value={password} />
           <br/>
           <input  className="btn btn-outline-primary mt-4"  type="submit" />
           </form>
        </div>
    )
}

export default Getdatafirebase
