import React from 'react';
import Logo from './Logo'
import Image from './Image'
import Heading from './Heading';
import Subscribe from './Subscribe';
import Social from './Social';

function App() {
    return <div className='container'>
        <Logo />
        <Heading />
        <Subscribe />
        <Image />
        <Social />
    </div>
}

export default App;