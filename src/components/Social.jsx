import React from 'react';
import { Facebook, Instagram } from 'react-feather';
import { Twitter } from 'react-feather';


function Social() {
    return <div>
        <div className='social-media'>
            <Facebook className='facebook' color="hsl(223, 87%, 63%)" size={30} />
            <Twitter className='twitter' color="hsl(223, 87%, 63%)" size={30} />
            <Instagram className='instagram' color="hsl(223, 87%, 63%)" size={30} />
        </div>
        <div>
            <h6>&copy; Copyright Ping. All rights reserved.</h6>
        </div>
    </div>
}

export default Social;