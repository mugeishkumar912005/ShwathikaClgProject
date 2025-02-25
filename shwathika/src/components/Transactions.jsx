import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Transactions = ({ transactions }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">💰 Transaction History</h2>

            {/* Transaction Table */}
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Stock</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="text-center">
                                <td className={`py-2 px-4 border-b ${transaction.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                                    {transaction.type}
                                </td>
                                <td className="py-2 px-4 border-b">{transaction.name}</td>
                                <td className="py-2 px-4 border-b">${transaction.price.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b">{transaction.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Transaction Graph */}
            <h3 className="text-xl font-semibold mb-4">📈 Transaction Trend</h3>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={transactions.map((t, index) => ({ ...t, index }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" tickFormatter={(index) => transactions[index]?.name} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#4f46e5" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Transactions;
