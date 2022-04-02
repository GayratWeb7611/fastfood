import style from '../../styles/layout.module.scss';
import Link from 'next/link';
import React, {useState} from 'react';


const Navbar = () => {

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Link href='/'>
            <a>
          <img src='https://c8.alamy.com/comp/2G1G8F2/burger-vector-hamburger-icon-fast-food-illustration-2G1G8F2.jpg' alt='' />
            </a>
        </Link>
        </div>

        <ul>
          <li>
            <Link href='#about'>
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href='#product'>
              <a>PRODUCTS</a>
            </Link>
          </li>
          
        
          
           
          
          
          <li>
            <Link href='#contact'>
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
        
      </nav>

    </>
  );
};
export default Navbar;
