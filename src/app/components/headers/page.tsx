import React from 'react';
import Image from 'next/image';


const Header: React.FC = () => {
    return (
        <h1 className="w-full text-center px-4 sm:px-6 md:px-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:my-8 md:my-10 lg:my-16 text-green-900">
            Apa yang bisa kami bantu hari ini?
        </h1>
    );
};

export default Header;
