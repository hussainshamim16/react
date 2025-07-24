import React, { useState } from 'react'
import ScreenRoutes from '../Routes/ScreenRoutes';

const Admin = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const FourCards = [
        {
            id: 1,
            title: 'Customers',
            description: 'View and manage customer records easily.'
        },
        {
            id: 2,
            title: 'Analytics',
            description: 'Track your business performance with detailed analytics.'
        },
        {
            id: 4,
            title: 'Sales',
            description: 'Manage your sales pipeline and customer interactions.'
        }
    ]
    const Menu = [
        {
            id: 1,
            path: '/Dashboard',
            title: 'Home'
        },
        {
            id: 2,
            path: '/Customers',
            title: 'Customers'
        },
        {
            id: 3,
            path: '/Leads',
            title: 'Leads'
        },
        {
            id: 4,
            path: '/Sales',
            title: 'Sales'
        },
        {
            id: 5,
            path: '/Analytics',
            title: 'Analytics'
        },
        {
            id: 6,
            path: '/Messages',
            title: 'Messages'
        },
        {
            id: 7,
            path: '/User',
            title: 'User'
        },
        {
            id: 7,
            path: '/Settings',
            title: 'Settings'
        },
    ]
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <div
                className={`transition-all duration-300 ease-in-out bg-emerald-100 shadow-md ${drawerOpen ? 'w-64' : 'w-16'
                    }`}
            >
                {/* Toggle Button */}
                <div className="flex justify-end p-2">
                    <button
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        className="btn btn-sm btn-ghost"
                        title="Toggle Sidebar"
                    >
                        {drawerOpen ? '❌' : '☰'}
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="px-4 mt-4 space-y-4">
                    {drawerOpen && (
                        <>
                            <h2 className="text-xl font-semibold text-emerald-800 mb-4">Dashboard</h2>
                            <ul className="space-y-2">
                                {Menu.map(Menu => {
                                    return <li><a href="#" className="text-emerald-700 hover:underline">{Menu.title}</a></li>
                                })}
                            </ul>
                        </>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-emerald-50 p-6 overflow-auto">
                <h1 className="text-3xl font-bold text-emerald-700 mb-4">Welcome to Sopra CRM</h1>
                <p className="text-gray-700">Welcome to Sopra CRM — your all-in-one workspace to manage, track, and grow.</p>


                {/* Example Card */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FourCards.map(card => {
                        return <div className="p-6 bg-white rounded-lg shadow-md" key={card.id}>
                            <h3 className="text-xl font-semibold text-emerald-700 mb-2">{card.title}</h3>
                            <p className="text-gray-600">{card.description}.</p>
                        </div>
                    })}
                </div>

                {/* routes Section */}
                <div className="h-screen bg-amber-200 w-screen">
                    {
                        <ScreenRoutes />
                    }
                </div>
            </div>
        </div>
    )
}

export default Admin