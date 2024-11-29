import axios from 'axios';
import {useState,useEffect} from 'react';
import Search from './search';

const Customer = () => {
const [api, setData] = useState([]);

useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then
    ((res) => setData(res.data));
},[])

return(
<>
<Search api={api}/>
</> 
)
}

export default Customer;

