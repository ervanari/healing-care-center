import Image from 'next/image';
import Logo from '@/assets/logo.jpeg';

const Footer = () => {
    return (
        <div className="text-center mt-32">
            <p className="text-md font-medium md:text-base text-white">
                Layanan Hotline Kesehatan Mental dan Bunuh Diri
                <br />
                Kementerian Kesehatan
            </p>
            <Image
                src={Logo}
                alt="Logo Kemenkes RS Marzoeki Mahdi"
                className="mx-auto mt-8"
                width={100}
                height={50}
            />
        </div>
    )
}

export default Footer;
