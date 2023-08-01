import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {props} from 'react';
 export default function button() {

  return (
    <>
      <div className="clearfix"> 
        <Link to="#home" smooth>
          <button id='BUTTON' className='button btn'>
            Move top
          </button>
        </Link>
      </div>

      </>
    );
}
