import { useState } from "react"
import {useNavigate} from 'react-router-dom';

export default function Login(){
 const [selectOption ,setSelectOption] = useState('Admin');
 const navigate = useNavigate();

 const setOption = (e) => {
    setSelectOption(e.target.value);
 }
 const handleSubmit = () => {
    if(selectOption==='Admin'){
        navigate('/Admin')
    }else if(selectOption==='Customer'){
        console.log('customer');
        navigate('/customer');
    }else 
    alert('please select a option');
 }
 
return <>
   <div className="h-screen flex justify-center items-center" 
   style={{backgroundImage: 'url(https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh'}}>
   <div className="flex flex-col items-center">
   <select value = {selectOption} onChange={setOption} 
   className="rounded-md">
   <option value="Admin">Admin</option>
   <option value="Customer">Customer</option>
   </select>
   <button onClick={handleSubmit} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Go</button>
   </div>
   </div>
   </>

}
