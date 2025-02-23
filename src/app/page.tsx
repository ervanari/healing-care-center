"use client";
import type { NextPage } from 'next'
import { useState } from "react";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/app/components/headers/page'));
const Button = dynamic(() => import('@/app/components/Button'));
const Footer = dynamic(() => import('@/app/components/footers/page'));
const Modal = dynamic(() => import('@/app/components/Modal'));

const Home: NextPage = () => {
    const [modalType, setModalType] = useState<"emergency" | "counseling" | null>(null);
    
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-images">
        <div className="text-center w-full">
          <Header />
          <div className="w-[45%] mx-auto space-y-6">
            <Button
                title="Saya merasa ingin mengakhiri hidup"
                description="Hubungi 119 ext. 8 untuk darurat bunuh diri"
                onClick={() => setModalType("emergency")}
            />
            <Button
                title="Saya butuh cerita dengan seseorang"
                description="Konseling via WhatsApp"
                onClick={() => setModalType("counseling")}
            />
          </div>
            <Modal isOpen={modalType !== null} onClose={() => setModalType(null)} type={modalType || "emergency"} />
          <Footer />
        </div>
      </div>
  )
}

export default Home
