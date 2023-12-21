import SchoolCard from '@/Components/SchoolCard'
import axios from 'axios';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [schools,setSchools] = useState([]);

  const fetchSchoolsData = async() => {
    await axios.get("http://127.0.0.1:9000/api/v1/fetchData")
    .then((response) => {
      console.log(response);
      setSchools(response.data.result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
  
      fetchSchoolsData();
  
  },[]);
  return (
    <div className='container'>
      <div className="schools">
        {
          schools && schools.map((school) =>(
            <SchoolCard  key={school.id} school={school} />
          ))
        }
      </div>
    </div>
  )
}
