import React from "react";

interface ButtonProps {
    title: string;
    description: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, description, onClick }) => {
    return (
        <div
            className="bg-white rounded-3xl shadow-custom p-4 sm:p-6 md:p-8 cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={onClick}
        >
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-green-900">
                    {title}
                </p>
                <img
                    className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
                    src="https://img.icons8.com/fluency-systems-filled/50/long-arrow-right.png"
                    alt="long-arrow-right"
                />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2 italic text-center">
                {description}
            </p>
        </div>
    );
}

export default Button;
