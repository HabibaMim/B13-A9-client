import React from 'react';
import logo from "../../public/assets/logo.png"
import Image from 'next/image';
import { Link } from '@heroui/react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-amber-900 text-amber-50 p-10">
    <nav>
        
    </nav>
  <nav>
    <h6 className="footer-title text-amber-100">Useful Links</h6>
    <Link href="/" className="link link-hover text-amber-50">Home</Link>
    <Link href="" className="link link-hover text-amber-50">Rooms</Link>
    <a className="link link-hover text-amber-50">About</a>
  </nav>

  <nav>
    <h6 className="footer-title text-amber-100">Contact information</h6>
    <a className="link link-hover text-amber-50">Email: studynook@gmail.com</a>
    <a className="link link-hover text-amber-50">Phone: +05738345753</a>
  </nav>

  <nav>
  <h6 className="footer-title text-amber-100">Social Links</h6>

  <div className="grid grid-flow-col gap-4">

    <a href="#" aria-label="Facebook">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current text-amber-50">
        <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.407 24 22.674V1.326C24 .593 23.405 0 22.675 0z"/>
      </svg>
    </a>

    <a href="#" aria-label="X">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current text-amber-50">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zM17.083 19.77h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>

   <a href="#" aria-label="LinkedIn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current text-amber-50">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.979 20.452H3.694V9h3.285v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
</a>

 <a href="#" aria-label="Instagram">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current text-amber-50">
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
  </svg>
</a>

  </div>
</nav>

</footer>

<footer className="footer sm:footer-horizontal footer-center bg-amber-900 text-amber-100 p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by StudyNook Ltd</p>
  </aside>
</footer>

        </div>
    );
};

export default Footer;