const Video = () => {
    return (

        <div className="w-full relative">
            <div className="w-full h-full absolute top-0 left-0 bg-black/70"></div>
            <video autoPlay loop muted playsInline className="w-full h-125 object-cover object-center">
                <source src="/tiamate.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;