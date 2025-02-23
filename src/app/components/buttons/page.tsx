import React from "react";

interface ButtonProps {
    title: string;
    description: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title , description, onClick }) => {
    return (
        <div className="bg-white rounded-3xl shadow-custom p-6 md:p-8" onClick={onClick}>
            <div className="flex items-center justify-center space-x-3.5 cursor-pointer">
                <p className="text-3xl font-medium text-green-900">
                    {title}
                </p>
                <img width="30" height="30"
                     src="https://img.icons8.com/fluency-systems-filled/50/long-arrow-right.png"
                     alt="long-arrow-right"
                />
            </div>
            <p className="text-sm md:text-base text-gray-500 mt-2 italic">
                {description}
            </p>
        </div>
    );
}

export default Button;
