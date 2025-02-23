import React from "react";

interface TabContentProps {
    activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
    return (
        <div className="p-4 sm:p-6 rounded-md container mx-auto">
            {activeTab === "healing" ? (
                <div>
                    <ul className="flex flex-col list-disc mt-4 pl-4">
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Kamu tersambung dengan konselor di website JakCare
                        </li>
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Semua keluh-kesahmu akan kami dengarkan dengan tulus
                        </li>
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Tempat bercerita yang aman dan nyaman
                        </li>
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Membantumu menemukan jalan keluar
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mt-4">
                        <a
                            href="https://vcall-chat.mala-widiyanto.workers.dev/set-username"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="w-full sm:w-auto max-w-[17.5rem]"
                        >
                            <button className="py-3 px-4 w-full sm:w-auto rounded-full bg-[#2F9EBD] text-white text-base sm:text-lg flex items-center justify-center gap-2.5">
                                <img width="25" height="25" src="https://img.icons8.com/fluency/50/video-message.png" alt="video-message"/>
                                Video Call via JakCare
                            </button>
                        </a>
                    </div>
                </div>
            ) : (
                <div>
                <ul className="flex flex-col list-disc mt-4 pl-4">
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Kamu tersambung dengan konselor di Whatsapp
                        </li>
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Semua keluh-kesahmu akan kami dengarkan dengan tulus
                        </li>
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Tempat bercerita yang aman dan nyaman
                        </li>
                        <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            Membantumu menemukan jalan keluar
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mt-4">
                        <a
                            href="https://api.whatsapp.com/send/?phone=628973856130&text=halo%20kak%2C%20saya%20ingin%20bercerita%20mengenai...&type=phone_number&app_absent=0"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="w-full sm:w-auto max-w-[17.5rem]"
                        >
                            <button
                                className="py-3 px-4 w-full sm:w-auto rounded-full bg-[#2F9EBD] text-white text-base sm:text-lg flex items-center justify-center gap-2.5">
                                <img width="25" height="25"
                                     src="https://img.icons8.com/color/48/whatsapp--v1.png"
                                     alt="whatsapp"/>
                                Chat Whatsapp
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabContent;
