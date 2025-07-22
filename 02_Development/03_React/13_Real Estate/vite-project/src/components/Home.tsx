import React from 'react'
import homePage from '../assets/homePage.jpg'

const Home = () => {
    return (
        <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-white min-h-[60vh] flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-30 w-full max-w-7xl mx-auto">

                {/* Left: Text Content */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                    {/* Heading */}
                    <div className="mb-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Let's find a home
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight mt-2">
                            That's perfect for you
                        </h1>
                    </div>

                    {/* Subheading */}
                    <div className="max-w-xl mb-8 mx-auto lg:mx-0">
                        <p className="text-base sm:text-lg text-gray-600 mb-4 font-normal leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus minus tempore eos iure maiores voluptate odit aut!
                        </p>
                        <p className="text-lg text-gray-700 font-semibold">
                            Let's discover soon.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <button className="bg-slate-200 hover:bg-blue-200  hover:text-blue-700 text-black px-10 sm:px-14 py-5 rounded text-base sm:text-lg font-medium shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Buy</button>

                        <button className="bg-slate-200 hover:bg-blue-200  hover:text-blue-700 text-black px-10 sm:px-14 py-5 rounded text-base sm:text-lg font-medium shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Sell</button>

                        <button className="bg-slate-200 hover:bg-blue-200  hover:text-blue-700 text-black px-10 sm:px-14 py-5 rounded text-base sm:text-lg font-medium shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">Rent</button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
                    <img
                        src={homePage}
                        alt="Home Page"
                        className="w-full lg:max-w-lg xl:max-w-3xl h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home