import React,{useState} from 'react';

function Loginform() {
    const [data, setdata] = useState({username:'',password:''})

    const {username,password}=data;
    const chnageHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }


    const inputdata =(e)=>{
        e.preventDefault();
        console.log(data);
    }


    return (
     <div>
     <form onSubmit={inputdata}>
     <h1>Loginform</h1>
         
           <br/>
        <input type="text" name="username" value={username} onChange={chnageHandler} />
           <br/>
        <input type="password" name="password" value={password} onChange={chnageHandler} />
           <br/>
        <input type="submit" name="submit" />
            </form>
            
        </div>
    )
}

export default Loginform
