import React, { useState }from "react";



function App() {
  const [one,setOne] = useState(true);
  const [two,setTwo] = useState(false);
  const [three,setThree] = useState(false);
 const hideone = ()=>{
    setOne(false);
    setTwo(true);
  }
  const hidetwo = ()=>{
   
    setTwo(false);
    setThree(true);
  }
  const twotoone = ()=>{
    setTwo(false);
    setOne(true);
  }
  const threetotwo = ()=>{
    setThree(false);
    setTwo(true);
  }

  return (

    <>

   {one && <form>
       
  
          <label for="name">Enter your name: </label>
          <input type="text" id="name" /><br/><br/>


          <label for="age">Enter your age: </label>
          <input type="number" id="age" min='2'/><br/><br/>

     
          <label for="name"> Sex: </label>
          <input type="text" id="name" /><br/><br/>

     
          <label for="age">College Name: </label>
          <input type="number" id="college"/><br/><br/>

          <button onClick={hideone}>next</button>
         
       
      </form>
      
    
    
    
    
    
    }

   { two && <form>
       
          <label for="name">House No: </label>
          <input type="text" id="house" /><br/><br/>
          <label for="age">Near by </label>
          <input type="text" id="near"/><br/><br/>
          <label for="age">City:</label>
          <input type="text" id="city"/><br/><br/>
          <label for="distric">Distric </label>
          <input type="text" id="distric"/><br/><br/>
          <label for="state">State </label>
          <input type="text" id="state"/><br/>        
          <br/>
          <button onClick={hidetwo} >next</button>
          <button onClick={twotoone} >back</button>
 
      </form>
   }
   { three && <form>
   
      <label for="name">Debit Card No. </label>
      <input type="number" id="cardno" /><br/><br/>
      <label for="age">CVV </label>
      <input type="number" id="cvv"/><br/><br/>
      <label for="age">Expiry Date </label>
      <input type="Date" id="date"/><br/><br/>
      <button >submit</button><button onClick={threetotwo}>back</button>
  
  </form>
}
      </>
  );
}

export default App;
