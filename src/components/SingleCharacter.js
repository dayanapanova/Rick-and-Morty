import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleCharacter = ({ image, name, status }) => {


    return (
        <div className='character-holder'>
            <div className='character-holder-image'>
                image
            </div>
            <div>{name}</div>
            <div>{status}</div>
        </div>
    )
}

export default SingleCharacter;