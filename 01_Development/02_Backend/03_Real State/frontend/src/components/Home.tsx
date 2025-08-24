import { motion } from "framer-motion";
import homePage from "../assets/homePage.jpg";

const Home = () => {

    return (
        <div className="w-full bg-gray-50 font-sans">
            {/* Hero Section */}
            <section
                className="relative px-4 sm:px-8 lg:px-20 pt-20 pb-52 bg-cover bg-center rounded-b-[3rem]"
                style={{
                    backgroundImage: `url(${homePage})`,
                }}
            >
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/50 rounded-b-[3rem] pointer-events-none" />
                <div className="relative max-w-6xl mx-auto text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug drop-shadow-lg"
                    >
                        Buy and Sell, Rent, <br className="hidden sm:block" />
                        Cooperate, Property
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-base sm:text-lg mb-10 opacity-90 drop-shadow-md"
                    >
                        Choose a property service and explore
                    </motion.p>
                    {/* Search box removed as requested */}
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
                        We Are Spread All <br className="hidden sm:block" />
                        Over the Archipelago.
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Serving 50+ cities, 120k+ listings, and thousands of happy customers with the best real estate services.
                    </p>
                    <button
                        className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg transition-all shadow-md"
                    >
                        See Our Projects
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 text-center">
                    {[
                        { value: "300K+", label: "Property Searches" },
                        { value: "48+", label: "Cities" },
                        { value: "52K+", label: "Customers" },
                        { value: "125K+", label: "Listings Posted" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transform duration-200 hover:scale-105"
                        >
                            <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
