"use client";
import type { NextPage } from 'next';
import { useState } from "react";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/app/components/headers/page'));
const Button = dynamic(() => import('@/app/components/Button'));
const Footer = dynamic(() => import('@/app/components/footers/page'));
const Modal = dynamic(() => import('@/app/components/Modal'));

const Home: NextPage = () => {
    const [modalType, setModalType] = useState<"emergency" | "counseling" | null>(null);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-images px-4 sm:px-6 md:px-8">
            <div className="text-center w-full">
                <Header />
                <div className="w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[45%] mx-auto space-y-6">
                    <Button
                        title="Saya merasa ingin mengakhiri hidup"
                        description="Hubungi 02129292903 untuk darurat bunuh diri"
                        onClick={() => setModalType("emergency")}
                    />
                    <Button
                        title="Saya butuh cerita dengan seseorang"
                        description="Konseling via WhatsApp dan Video Call"
                        onClick={() => setModalType("counseling")}
                    />
                </div>
                <Modal isOpen={modalType !== null} onClose={() => setModalType(null)} type={modalType || "emergency"} />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
