import {useLoaderData} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const UserDetails = () => {
 
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name,email} = user;

      const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div >
          <h2>Details about user</h2>  
          <h3>Name : {name}</h3>
          <p> Email : {email}</p>
          <button onClick={ handleGoBack }>Go back</button>
        </div>
    );
};

export default UserDetails;