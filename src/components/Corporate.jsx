function NavBar() {
    return (
        <>
            <div
                className="fixed top-0 z-50 left-1/2 -translate-x-1/2 flex flex-row w-[90%] mx-auto justify-between my-[30px] items-center bg-gradient-to-r from-[rgba(11, 11, 11, 0.6)] to-[rgba(11, 11, 11, 0.6)] px-[clamp(1rem,2.5vw,2rem)] h-[50px] rounded-full outline-2 outline-black backdrop-blur-2xl">
                <div>
                    <p>Axolotron</p>
                </div>
                <div className="flex items-center gap-[clamp(1.5rem,8vw,5rem)]">
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">Products</p>
                    <p className="cursor-pointer">Case Studies</p>
                    <p className="cursor-pointer">Free Consultation</p>
                </div>
            </div>
        </>
    );
}

function Home() {
    return (
        <div className="bg-black rounded-b-4xl h-[500px]">
        <div className="bg-white h-[400px]">
            <div>
                <p>Discover How AI Can Automate Tasks and Supercharge Your Productivity</p>
            </div>
            <div>
                <div>
                    <p>Lorem ipsum vestibulum tortor eget tortor id adipiscing donec commodo aliquam nunc ac fermentum
                        neque eu pellentesque quis tristique erat augue</p>
                    <button>Explore</button>
                </div>
                <div>
                    <img src="Corporate.jsx" alt="Man Pose"/>
                </div>
            </div>
        </div>
        </div>
    )
}

function Usages() {
    return (
        <div className="h-[500px] w-screen bg-black">
            <p>150</p>
        </div>
    )
}


export default function Corporate() {
    return (
        <>
            <NavBar/>
            <Home/>
            <Usages/>
        </>
    );
}
