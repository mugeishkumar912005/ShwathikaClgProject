import React from 'react';
// import Nav from './Nav';  

const Home = ({ onBuy }) => {
    const stocks = [
        { id: 1, name: 'Apple', price: 175, logo: 'https://logo.clearbit.com/apple.com' },
        { id: 2, name: 'Tesla', price: 720, logo: 'https://logo.clearbit.com/tesla.com' },
        { id: 3, name: 'Amazon', price: 3200, logo: 'https://logo.clearbit.com/amazon.com' },
        { id: 4, name: 'Google', price: 2800, logo: 'https://logo.clearbit.com/google.com' },
        { id: 5, name: 'Microsoft', price: 340, logo: 'https://logo.clearbit.com/microsoft.com' },
        { id: 6, name: 'Netflix', price: 590, logo: 'https://logo.clearbit.com/netflix.com' },
        { id: 7, name: 'Meta', price: 450, logo: 'https://logo.clearbit.com/meta.com' },
        { id: 8, name: 'Nvidia', price: 800, logo: 'https://logo.clearbit.com/nvidia.com' },
        { id: 9, name: 'Samsung', price: 680, logo: 'https://logo.clearbit.com/samsung.com' },
        { id: 10, name: 'Intel', price: 450, logo: 'https://logo.clearbit.com/intel.com' },
        { id: 11, name: 'Adobe', price: 600, logo: 'https://logo.clearbit.com/adobe.com' },
        { id: 12, name: 'PayPal', price: 290, logo: 'https://logo.clearbit.com/paypal.com' },
        { id: 13, name: 'Spotify', price: 320, logo: 'https://logo.clearbit.com/spotify.com' },
        { id: 14, name: 'Twitter', price: 210, logo: 'https://logo.clearbit.com/twitter.com' },
        { id: 15, name: 'Airbnb', price: 140, logo: 'https://logo.clearbit.com/airbnb.com' },
        { id: 16, name: 'Zoom', price: 150, logo: 'https://logo.clearbit.com/zoom.us' },
        { id: 17, name: 'Salesforce', price: 700, logo: 'https://logo.clearbit.com/salesforce.com' },
        { id: 18, name: 'Shopify', price: 1200, logo: 'https://logo.clearbit.com/shopify.com' },
        { id: 19, name: 'Oracle', price: 320, logo: 'https://logo.clearbit.com/oracle.com' },
        { id: 20, name: 'Dell', price: 110, logo: 'https://logo.clearbit.com/dell.com' },
        { id: 21, name: 'Cisco', price: 500, logo: 'https://logo.clearbit.com/cisco.com' },
        { id: 22, name: 'Uber', price: 280, logo: 'https://logo.clearbit.com/uber.com' },
        { id: 23, name: 'Snapchat', price: 180, logo: 'https://logo.clearbit.com/snapchat.com' },
        { id: 24, name: 'Pinterest', price: 120, logo: 'https://logo.clearbit.com/pinterest.com' },
        { id: 25, name: 'IBM', price: 140, logo: 'https://logo.clearbit.com/ibm.com' }
    ];

    return (
        <>
        <div className="p-6 bg-white rounded-lg shadow-lg">
        {/* <div>
            <Nav/>
        </div> */}
            <h2 className="text-2xl font-bold mb-6 text-center">📊 Available Stocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stocks.map(stock => (
                    <div key={stock.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={stock.logo} alt={stock.name} className="h-10 w-10 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">{stock.name}</h3>
                                <p className="text-gray-600">${stock.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            onClick={() => onBuy(stock)}
                            >
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Home;
