import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Transactions from './components/Transactions';
import Nav from './components/Nav';

const App = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const handleBuy = (stock) => {
        setPortfolio((prev) => {
            const existingStock = prev.find((s) => s.id === stock.id);
            if (existingStock) {
                return prev.map((s) =>
                    s.id === stock.id ? { ...s, quantity: s.quantity + 1 } : s
                );
            } else {
                return [...prev, { ...stock, quantity: 1 }];
            }
        });

        setTransactions((prev) => [
            ...prev,
            { type: 'Buy', name: stock.name, price: stock.price, date: new Date().toLocaleString() }
        ]);
    };

    const handleSell = (stock) => {
        setPortfolio((prev) =>
            prev
                .map((s) => (s.id === stock.id ? { ...s, quantity: s.quantity - 1 } : s))
                .filter((s) => s.quantity > 0)
        );

        setTransactions((prev) => [
            ...prev,
            { type: 'Sell', name: stock.name, price: stock.price, date: new Date().toLocaleString() }
        ]);
    };

    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home onBuy={handleBuy} />} />
                <Route path="/portfolio" element={<Portfolio portfolio={portfolio} onSell={handleSell} />} />
                <Route path="/transactions" element={<Transactions transactions={transactions} />} />
            </Routes>
        </>
    );
};

export default App;