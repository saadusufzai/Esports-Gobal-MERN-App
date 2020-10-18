import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './admin.css'
const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/users/')
        .then((res)=> {
            console.log(res.data)
            setUsers(res.data)
        }).catch(err => console.log(err))
     
       
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>PUBG_ID</th>
                        <th>City</th>
                        <th>Registered On</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>( 
                         <tr>
                         <td>{user.firstName +" "+ user.lastName}</td>
                         <td>{user.phone}</td>
                         <td>{user.pubgId}</td>
                         <td>{user.city}</td>
                         <td>{user.register_date}</td>
                     </tr>    
                    ))}
               
                </tbody>
            </table>
        </div>
    )
}

export default Users
