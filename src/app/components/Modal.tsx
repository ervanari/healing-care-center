"use client";
import { useState } from "react";
import TabButton from "@/app/components/TabButton";
import TabContent from "@/app/components/TabContent";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    type: "emergency" | "counseling";
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("healing");
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-xs sm:max-w-md md:max-w-3xl w-full">
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-left">
                    <div className="flex justify-between text-black text-sm sm:text-base md:text-lg">
                        <div>
                            Layanan Darurat <span className="font-bold">24 jam</span>
                        </div>
                        <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                            ✕
                        </button>
                    </div>
                    {type === "emergency" ? (
                        <>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mt-4">
                                Anda akan terhubung dengan layanan darurat
                                <span className="text-[#03799A]">
                                    <a href="tel:119" rel="noopener noreferrer" target="_blank" className="no-underline"> JakCare </a>
                                </span>
                            </h3>
                            <p className="mt-4 text-sm sm:text-base md:text-lg text-black mb-6">
                                Bantuan darurat jika kamu atau orang di sekitarmu merasa ingin mengakhiri hidup.
                            </p>
                            <div>
                                <p className="text-black text-sm sm:text-base md:text-lg font-semibold">
                                    Apa yang terjadi saat menghubungi JakCare?
                                </p>
                                <ul className="mt-4 pl-4 text-sm sm:text-base md:text-lg list-disc text-black">
                                    <li>JakCare adalah layanan tanggap darurat.</li>
                                    <li>Layanan ini tidak dipungut biaya.</li>
                                    <li>Pastikan untuk memberikan informasi lokasi & situasi yang jelas.</li>
                                </ul>
                                <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center mt-6">
                                    <a href="https://api.whatsapp.com/send/?phone=628973856130&text=halo"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="w-full max-w-sm">
                                        <button className="py-2.5 w-full text-white bg-[#2F9EBD] rounded-full flex items-center justify-center gap-2 hover:bg-[#2388A3]">
                                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.47 18.9476..." stroke="currentColor" strokeWidth="1.5"></path>
                                            </svg>
                                            Hubungi JakCare
                                        </button>
                                    </a>
                                </div>
                                <div className="p-2 md:p-4 rounded-md mt-8 bg-[#F6F6F4] flex flex-col items-center">
                                    <p className="text-center font-medium text-black text-sm sm:text-base md:text-lg">
                                        Jika belum dapat tersambung, coba hubungi:
                                    </p>
                                    <ul className="flex flex-col md:flex-row gap-2 sm:gap-4 mt-2">
                                        <li>
                                            <a href="https://api.whatsapp.com/send/?phone=628973856130" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                <img width="25" height="25" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" />
                                                <p className="underline text-[#03799A] text-sm sm:text-base">Chat WhatsApp</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://vcall-chat.mala-widiyanto.workers.dev/set-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                                <img width="25" height="25" src="https://img.icons8.com/office/50/chat.png" alt="chat" />
                                                <p className="underline text-[#03799A] text-sm sm:text-base">Video Call JakCare</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mt-4">
                                Konseling dengan JakCare
                            </h3>
                            <p className="mt-4 text-sm sm:text-base md:text-lg text-black">
                                Konseling untuk gejala kecemasan, putus asa, rendah diri, dan lainnya.
                            </p>
                            <div className="mt-4 flex border-b">
                                <div className="flex space-x-4">
                                    <TabButton label="Video Call JakCare" isActive={activeTab === "healing"} onClick={() => setActiveTab("healing")} />
                                    <TabButton label="Chat WhatsApp" isActive={activeTab === "whatsapp"} onClick={() => setActiveTab("whatsapp")} />
                                </div>
                            </div>
                            <TabContent activeTab={activeTab} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
