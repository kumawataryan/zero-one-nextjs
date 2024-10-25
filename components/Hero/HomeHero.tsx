const HomeHero = () => {
    return (
        <div className='w-full h-screen relative bg-[#0D0F1A]'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <h1 className="xl:text-[80px] 2xl:text-[120px] md:text-[60px] sm:text-[48px] font-medium text-white leading-none absolute bottom-6 left-6">
                    full cycle — <br />digital agency
                </h1>
            </div>
        </div>
    )
}

export default HomeHero