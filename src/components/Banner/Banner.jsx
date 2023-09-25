

const Banner = () => {
    return (
        
        <div className="flex items-center justify-center h-[72vh] mb-12, bg-fixed bg-center bg-cover custom-img">
            
            {/* Overlay */}
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-white/90 z[2]"/>

            <div className="p-5 z-[2]">
                <h1 className="text-5xl font-black text-[#2B1B9A]">I Grow By Helping People In Need</h1>
            </div>
            
            
            
        </div>
    );
};

export default Banner;