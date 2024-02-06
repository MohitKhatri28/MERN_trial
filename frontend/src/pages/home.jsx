import React, { useEffect, useState } from 'react'
import { SidebarWithBurgerMenu } from '../components/sidebar'
import { CarouselCustomArrows } from '../components/carousel'
import { NavbarSimple } from '../components/navbar'
import Spinner from '../components/spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      
      <NavbarSimple className="z-50"/>
      <CarouselCustomArrows className=" -z-10"/>
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border rounded-md'>No.</th>
            <th className='border rounded-md'>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className='h-8'>
              <td className='border rounded-md text-center'>{index + 1}</td>
              <td className='border rounded-md text-center'>
                <div className='flex justify-center'>
                  <Link to={`/teach/${user._id}`}>
                    <p>{user.username}</p>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}
