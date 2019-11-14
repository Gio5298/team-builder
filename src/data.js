import React from 'react';
import Solid from './img/Solid-Snake.jpg';
import Liquid from './img/Liquid-Snake.png';
import Solidus from './img/Solidus-Snake.jpg';

const members = [
    {
        id: 1,
        name: 'Solid Snake',
        role: 'Front-end Engineer',
        image: <img className='solid' src={Solid} alt='Solid from mgs2' />
    },
    {
        id: 2,
        name: 'Liquid Snake',
        role: 'Back-end Engineer',
        image: <img className='liquid' src={Liquid} alt='Liquid from mgs1'/>
    },
    {
        id: 3,
        name: 'Solidus Snake',
        role: 'UX Designer',
        image: <img className='solidus' src={Solidus} alt='Solidus from mgs2'/>
    },
]

export default members 