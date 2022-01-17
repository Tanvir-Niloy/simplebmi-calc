
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('No message yet');


  let imgSrc =''

  let calcBmi = (e)=>{

        e.preventDefault();

        if(weight ===0 || height===0){

                toast.error('Please Enter a Valid weight or height')
        }else{

           let bmi = (weight / (height * height) * 703)
           setBmi(bmi.toFixed(1))
        }   

          // Logic for message

      if (bmi < 25) {
        setMessage('You are underweight');
        toast.info('You Are Underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
        toast.success('congratulation You Are a healthy weight')
      } else {
        setMessage('You are overweight')
        toast.warning('Worried! You Are Overweight')

      }
    }

 


  let reload = (e)=>{

    window.location.reload()
  }

  return (
    
      <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
       <div className='app'>
        <div className="container">
          <h2 className="center">BMI Caculator</h2>
          <form onSubmit={calcBmi}>
              <div>
                <label>Weight (lbs)</label>
                <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
              </div> 
               <div>
                <label>Height (in)</label>
                <input type="text" value={height}  onChange={(e)=>setHeight(e.target.value)}/>
              </div> 
              <div>
                <button className="btn" type='submit'>Submit</button>
                <button className="btn btn-outline" type='submit' onClick={reload}>Reload</button>
              </div>
          </form>
          <div className="center">
            <h3>Your Bmi is : {bmi}</h3>
            <p>{message}</p>
          </div>
          <div className="img-container">
            <img src={imgSrc} alt="" />
          </div>
          </div>    
      </div>
      </>
  );
}

export default App;
