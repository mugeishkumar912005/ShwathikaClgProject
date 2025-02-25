import React from 'react';

const Portfolio = ({ portfolio, onSell }) => {
    const totalValue = portfolio.reduce((total, stock) => total + stock.price * stock.quantity, 0);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">📈 Your Portfolio</h2>
            <h3 className="text-xl font-semibold text-center mb-4">💰 Total Value: ${totalValue.toFixed(2)}</h3>

            {portfolio.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Logo</th>
                            <th className="py-2 px-4 border">Stock Name</th>
                            <th className="py-2 px-4 border">Price</th>
                            <th className="py-2 px-4 border">Quantity</th>
                            <th className="py-2 px-4 border">Total</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolio.map((stock) => (
                            <tr key={stock.id} className="text-center">
                                <td className="py-2 px-4 border">
                                    <img src={stock.logo} alt={stock.name} className="h-8 w-8 rounded-full" />
                                </td>
                                <td className="py-2 px-4 border">{stock.name}</td>
                                <td className="py-2 px-4 border">${stock.price.toFixed(2)}</td>
                                <td className="py-2 px-4 border">{stock.quantity}</td>
                                <td className="py-2 px-4 border">${(stock.price * stock.quantity).toFixed(2)}</td>
                                <td className="py-2 px-4 border">
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                        onClick={() => onSell(stock)}
                                    >
                                        Sell
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">No stocks in your portfolio yet.</p>
            )}
        </div>
    );
};

export default Portfolio;
