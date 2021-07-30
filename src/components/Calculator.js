import React,{useState} from 'react'

function Calculator() {

    const calstyle={
        display:'flex',
        width:'200px',
        maxHeight:"400px",
        margin:"30px auto",

    }
    const [inputdata, setinputdata] = useState("");
    const [Result, setResult] = useState(0);
    
    
    const inputHandler=(e)=>{
        setinputdata(e.target.value);
    }
    const setdata=()=>{
        setResult("");
        setinputdata("");

    }
    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" className="form-control me-40" value={inputdata} name="input" onChange={inputHandler} /><br/>
            <button className="btn btn-outline-success m-2" onClick={()=>setResult(eval(inputdata))}>click</button>
           <h3>Result : {Result}</h3>
       <div className="btn-toolbar mb-3" style={calstyle}>
           <button className="btn btn-info m-1 p-3" onClick={()=>setinputdata(inputdata+"1")}>1</button>
           <button className="btn btn-primary m-1 p-3" onClick={()=>setinputdata(inputdata+"2")}>2</button>
           <button className="btn btn-success m-1 p-3" onClick={()=>setinputdata(inputdata+"3")}>3</button>
           <button className="btn btn-warning m-1 p-3" onClick={()=>setinputdata(inputdata+"4")}>4</button>
           <button className="btn btn-danger m-1 p-3" onClick={()=>setinputdata(inputdata+"5")}>5</button>
           <button className="btn btn-info m-1 p-3"  onClick={()=>setinputdata(inputdata+"6")}>6</button>
           <button className="btn btn-primary m-1 p-3" onClick={()=>setinputdata(inputdata+"7")}>7</button>
           <button className="btn btn-info m-1 p-3" onClick={()=>setinputdata(inputdata+"8")}>8</button>
           <button className="btn btn-info m-1 p-3" onClick={()=>setinputdata(inputdata+"9")}>9</button>
           <button className="btn btn-info m-1 p-3" onClick={()=>setinputdata(inputdata+"*")}>*</button>
           <button className="btn btn-info m-1 p-3" onClick={()=>setinputdata(inputdata+"-")}>-</button>
           <button className="btn btn-info m-1 p-3" onClick={()=>setinputdata(inputdata+"+")}>+</button>
           <button className="btn btn-info m-2 px-5" onClick={setdata} >clear</button>
           </div>
         
        </div>
    )
}

export default Calculator
