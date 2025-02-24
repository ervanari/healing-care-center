import Image from 'next/image';
import Logo from '@/assets/logo.jpeg';
import React from "react";

const Footer = () => {
    return (
        <div className="text-center mt-32">
            <p className="text-md font-medium md:text-base text-white">
                Layanan Hotline Kesehatan Mental dan Bunuh Diri
                <br/>
                Dinas Kesehatan Provinsi Jakarta
            </p>
            <div className="flex items-center justify-center p-4 mb-8">
                <div className="flex flex-row items-center space-x-2">
                    <Image
                        src={Logo}
                        alt="Logo Kemenkes RS Marzoeki Mahdi"
                        className="mx-auto"
                        width={70}
                        height={50}
                    />
                    <img src="https://dinkes.jakarta.go.id/assets/images/logo/jayaraya.png" alt="Logo" width={50}
                         height={50}/>
                    <img src="https://dinkes.jakarta.go.id/assets/images/logo/jaksehat.png" alt="Logo" width={50}
                         height={50}/>
                    <img src="https://dinkes.jakarta.go.id/assets/images/logo/rsuj.png" alt="Logo" width={60}
                         height={70}/>
                    <img src="https://dinkes.jakarta.go.id/assets/images/logo/puskesmas.png" alt="Logo" width={50}
                         height={50}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
