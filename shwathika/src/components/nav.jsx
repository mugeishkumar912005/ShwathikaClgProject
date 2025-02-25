// src/components/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-blue-600 shadow-lg mb-6">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">📈 Stock Trader</h1>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
                    <li><Link to="/portfolio" className="text-white hover:text-gray-200">Portfolio</Link></li>
                    <li><Link to="/transactions" className="text-white hover:text-gray-200">Transactions</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
