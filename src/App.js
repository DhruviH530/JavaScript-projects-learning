
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName , setFirsetName] = useState("");
  // const[LastName , setLastName] = useState("");

  // console.log(firstName);
  // console.log(LastName);

  // function changeFisrtHandler(event){
  //     // console.log(event.target.value);
  //     setFirsetName(event.target.value);
  // }

  //   function changeLastHandler(event){
  //     // console.log(event.target.value);
  //     setLastName(event.target.value);
  // }

// multiple state handle krva mate ane atyre je form create kriye chiae to from no date ek ma store krva mate 
// and aavu kriye to handler nu nam same aapi skay 

  const [formData ,setFormData] = useState ( {firstName:"" , lastName:"" , email:"", comments:"", isVisible:true , mode:"" , favcar:""} );

  console.log(formData)

    function changeHandler(event){
        setFormData(prevFormData =>{
          return{
            ...prevFormData,
            [event.target.name] : event.target.value
          }
        });
    }

    function submitHandler(event){
      event.preventDefalut();
      // print krvau che to 
      console.log("entrie data")
      console.log(formData);
    }

  return (

    // name attribute aapvathi accses kri skase usestate ma nam aapvathi
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input type='text'
        placeholder='First Name'
          onChange={changeHandler}
          name='firstName'
          // controled component ma value define kriye to box ma store thay
          value={formData.firstName}
        />
        <br/>
        <br/>
          <input type='text'
        placeholder='Last Name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
          v
        />
        
        <br/>
        <br/>
          <input type='emial'
        placeholder='enter your email here'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br/>
        <br/>

        <textarea
          placeholder='enter ypur comment'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br/>
        <br/>

        <input
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        // if aa lakhiye and uper kriye to ui pr pehle thi checked aave uper invisible ture kriyu hoy aetle aave if false hoy to 
        // pehle thi cheked na aave 
        checked={formData.isVisible}  />

      {/* koi ne connet krva htmlfor use thay  */}
        <label htmlFor='isVisible'>Am I visible</label> 


         <br/>
        <br/>

        <fieldset>
          <legend>mode</legend>
          <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="online-mode"
        id='online-mode'
         checked={formData.mode === "online-mode"}
        />
        <label htmlFor='online-mode'>online mode ?</label>


             <br/>
        <br/>

        <input
        type='radio'
        onChange={changeHandler}
        name='modex'
        value="offline-mode"
        id='offline-mode'
        />
        <label htmlFor='offline-mode'>offline mode ?</label>
        </fieldset>

       <label htmlFor='favcar'>your car ! </label>
        <br/>
            <select
            name='favcar'
            id='favcar'
            value={formData.favcar}
            onChange={changeHandler}
            >
              <option value="thar">thar</option>
              <option value="mercedes">mercedes</option>
              <option value="verna">verna</option>
              <option value="range rover">range rover</option>
              <option value="defender">defender</option>
            </select>
            <br/>
             <br/>
      <input type='submit' value="submit"/>
   
      </form>
    </div>
  );
}

export default App;
