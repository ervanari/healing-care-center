import React from "react";

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`px-4 py-2 text-lg font-medium transition duration-300 ${
                isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default TabButton;
