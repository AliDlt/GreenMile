import React from 'react';
import {BiHomeSmile} from 'react-icons/bi'
import { Link } from 'react-router-dom';
function BackHome() {
    return ( 
        <div>
        <Link style={{textDecoration:'none',color:'#000'}} to= '/'>
        <BiHomeSmile style={{verticalAlign:'middle'}} fontSize='20px' /> بازگشت به صفحه اصلی 
        </Link>
        </div>
     );
}

export default BackHome;