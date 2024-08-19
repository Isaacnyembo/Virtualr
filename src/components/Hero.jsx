
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg-7xl text-center tracking-wide">
            VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> 
                {" "} for developers</span> 
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Empower your creativity and bring your VR apps to life with our intuitive development tools. 
            Get started today and turn your imagination into immersive reality
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="border py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
                Start for free
            </a>
            <a href="#" className="border mx-3 py-3 px-4  rounded-md">
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted  src={video1} className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" type="video/mp4">
                your browser does not support the video tag
            </video>
            <video autoPlay loop muted  src={video2} className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" type="video/mp4">
                your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default hero