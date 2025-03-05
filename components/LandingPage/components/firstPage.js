import Image from 'next/image';
import Background from '@/public/background.jpg';

export default function HeroSection() {
    return (
        <>

            <div className="relative h-screen">
                <div className="container mx-auto h-full relative">
                    {/* Background Image */}
                    <Image
                        src={Background}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        alt="Background"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    {/* Title */}
                    <div className="absolute top-16 left-10 z-10 text-[#25cc70] mix-blend-color-dodge font-serif font-extrabold text-[50px]">
                        <p className="font-serif">Zuimi</p>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                        <p className="text-white mt-36 sm:text-2xl md:text-3xl lg:text-5xl font-extrabold font-[Bungee]">
                            Looking for blockbusters?
                        </p>
                        <p className="text-white sm:text-2xl md:text-2xl lg:text-4xl mt-6 font-bold font-serif">
                            movies | series | tv shows
                        </p>
                        <button className="text-white p-2 bg-[#25cc70] text-2xl font-bold mt-5 rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
