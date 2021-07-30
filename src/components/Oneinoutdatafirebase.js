import React,{useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function Oneinoutdatafirebase() {
    const [data, setdata] = useState({username:''})
    // useEffect(() => {
    //     axios.post("https://sesha-users-default-rtdb.firebaseio.com/")
    //     .then(response => setdata(response.data))
        
    // }, [])

    const chnageHandler=(e)=>{
        setdata({...data,username:e.target.value})
    }

   

   const senddata=(e)=>{
       e.preventDefault();
       console.log(data);
       axios.post("https://practice1-signupdata-default-rtdb.firebaseio.com/singledata.json",data)
       .then(()=>alert("submited sucessfully"))
       .catch(()=>alert("not submitted"))
    //    axios.post("https://sesha-users-default-rtdb.firebaseio.com/newfile",data)
    //    .then(()=>alert("submited"))
    //    .catch(()=>alert("not submited"))
   }
    return (
        <div>
            <h1>singledata</h1>
            <form onSubmit={senddata}>
           <input type="text" onChange={chnageHandler} /><br/>
           
           {/* <input className="btn btn-outline-primary mt-4"  type="submit" /> */}
            <Button variant="outline-info mt-4 ms-5" type="submit"  >clickme</Button>
           </form>
        </div>
    )
}

export default Oneinoutdatafirebase
