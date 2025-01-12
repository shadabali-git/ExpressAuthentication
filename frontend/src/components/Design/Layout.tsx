// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Card } from "@/components/ui/card.tsx"; // Assuming you're using shadcn components

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex justify-center items-center">


                <Card className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to My App</h2>
                    <p className="text-gray-600 mb-6">
                        This is the main content area. You can use shadcn components for a cleaner UI.
                    </p>


                    <Outlet />
                </Card>

        </div>
    );
};

export default Layout;
