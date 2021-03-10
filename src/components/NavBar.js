import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar()
{
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-yellow-500"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-400 text-4xl font-bold cursive tracking-widest">
                        Ricardo Peleira
                    </NavLink>
                    <NavLink 
                    className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200  hover:text-yellow-400"
                    activeClassName="text-yellow-500"
                    to="/post">
                        Blog Posts
                    </NavLink>
                    <NavLink 
                    className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200  hover:text-yellow-400"
                    activeClassName="text-yellow-500"
                    to="/project">
                        Projects
                    </NavLink>
                    <NavLink 
                    className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-200  hover:text-yellow-400"
                    activeClassName="text-yellow-500"
                    to="/about"> 
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/ricardo.peleira" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/RickyMartin12" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/ricardo-peleira-0a73b483/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />

                </div>
            </div>
        </header>
    );
}