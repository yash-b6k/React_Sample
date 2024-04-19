import React,{useState} from 'react'

export default function Textform(props) {

   const handleUpClick = () =>{
    //    console.log("The written Has Changed to Capital-Letters "+  txt);
       let newText = txt.toUpperCase();
       setTxT(newText)
    
   }
   const handleOnChange=(event)=>{
    // console.log("On change Handler");
    setTxT(event.target.value)
   }



    const[txt,setTxT] = useState("write on your thought to Change a topic into capitals");
    
  return (
    <div>
      <h1>{props.TextHead}</h1>
            <div className="mb-3">
                <textarea className="form-control " value={txt} onChange={handleOnChange} id="Text_Space1" rows="8"></textarea>
            </div>
            <button className="btn btn-danger" onClick={handleUpClick}>Change to Capitals</button>
    </div>
  )
}
