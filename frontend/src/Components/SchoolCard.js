import React, { useState } from 'react';
import Image from 'next/image';
import { Rating } from '@mui/material';

const SchoolCard = ({ school }) => {

    const [rateValue, setRateVlue] = useState(3.5)

    return (
        <div className='schoolCard'>
            <div className="schoolImage">
                <Image src={`/images/school.jpg`} className='img' width={300} height={250} alt='school.jpg' />
            </div>
            <div className="schoolName">
                <p>{school.name}</p>
            </div>
            <div className="schoolAddress">
                <p>{school.address}</p>
            </div>
            <div className="schoolCityState">
                <p>{school.city}</p>
                <p>{school.state}</p>
            </div>
            <div className="schoolContact">
                <p>{school.number}</p>
                <Rating className='rating' value={rateValue} precision={0.5} readOnly/>
            </div>
            <div className="schoolEmail">
                <p>{school.email}</p>
            </div>
            <button>Apply</button>
        </div>
    )
}

export default SchoolCard
