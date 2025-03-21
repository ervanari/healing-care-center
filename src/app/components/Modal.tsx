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
                                    <a href="https://api.whatsapp.com/send/?phone=628973856130&text=halo" rel="noopener noreferrer" className="no-underline"> JakCare </a>
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
                                       rel="noopener noreferrer"
                                       className="w-full max-w-sm">
                                        <button
                                            className="py-2.5 w-full text-white bg-[#2F9EBD] rounded-full flex items-center justify-center gap-2 hover:bg-[#2388A3]">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22.47 18.9476C22.47 19.3076 22.39 19.6776 22.22 20.0376C22.05 20.3976 21.83 20.7376 21.54 21.0576C21.05 21.5976 20.51 21.9876 19.9 22.2376C19.3 22.4876 18.65 22.6176 17.95 22.6176C16.93 22.6176 15.84 22.3776 14.69 21.8876C13.54 21.3976 12.39 20.7376 11.25 19.9076C10.1 19.0676 9.01 18.1376 7.97 17.1076C6.94 16.0676 6.01 14.9776 5.18 13.8376C4.36 12.6976 3.7 11.5576 3.22 10.4276C2.74 9.28755 2.5 8.19755 2.5 7.15755C2.5 6.47755 2.62 5.82755 2.86 5.22755C3.1 4.61755 3.48 4.05755 4.01 3.55755C4.65 2.92755 5.35 2.61755 6.09 2.61755C6.37 2.61755 6.65 2.67755 6.9 2.79755C7.16 2.91755 7.39 3.09755 7.57 3.35755L9.89 6.62755C10.07 6.87755 10.2 7.10755 10.29 7.32755C10.38 7.53755 10.43 7.74755 10.43 7.93755C10.43 8.17755 10.36 8.41755 10.22 8.64755C10.09 8.87755 9.9 9.11755 9.66 9.35755L8.9 10.1476C8.79 10.2576 8.74 10.3876 8.74 10.5476C8.74 10.6276 8.75 10.6976 8.77 10.7776C8.8 10.8576 8.83 10.9176 8.85 10.9776C9.03 11.3076 9.34 11.7376 9.78 12.2576C10.23 12.7776 10.71 13.3076 11.23 13.8376C11.77 14.3676 12.29 14.8576 12.82 15.3076C13.34 15.7476 13.77 16.0476 14.11 16.2276C14.16 16.2476 14.22 16.2776 14.29 16.3076C14.37 16.3376 14.45 16.3476 14.54 16.3476C14.71 16.3476 14.84 16.2876 14.95 16.1776L15.71 15.4276C15.96 15.1776 16.2 14.9876 16.43 14.8676C16.66 14.7276 16.89 14.6576 17.14 14.6576C17.33 14.6576 17.53 14.6976 17.75 14.7876C17.97 14.8776 18.2 15.0076 18.45 15.1776L21.76 17.5276C22.02 17.7076 22.2 17.9176 22.31 18.1676C22.41 18.4176 22.47 18.6676 22.47 18.9476Z"
                                                    stroke="currentColor" strokeWidth="1.5"
                                                    strokeMiterlimit="10"></path>
                                            </svg>
                                            Hubungi JakCare
                                            <br/>
                                            02129292903
                                        </button>
                                    </a>
                                </div>
                                <div className="p-2 md:p-4 rounded-md mt-8 bg-[#F6F6F4] flex flex-col items-center">
                                    <p className="text-center font-medium text-black text-sm sm:text-base md:text-lg">
                                        Jika belum dapat tersambung, coba hubungi:
                                    </p>
                                    <ul className="flex flex-col md:flex-row gap-2 sm:gap-4 mt-2">
                                        <li>
                                            <a
                                                href="https://api.whatsapp.com/send/?phone=628973856130"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <img width="25" height="25"
                                                     src="https://img.icons8.com/color/48/whatsapp--v1.png"
                                                     alt="whatsapp"/>
                                                <p className="underline text-[#03799A] text-sm sm:text-base">
                                                    Chat WhatsApp
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://vcall-chat.mala-widiyanto.workers.dev/set-username"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <img width="25" height="25"
                                                     src="https://img.icons8.com/fluency/50/video-message.png"
                                                     alt="video-message"/>
                                                <p className="underline text-[#03799A] text-sm sm:text-base">
                                                    Video Call JakCare
                                                </p>
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
