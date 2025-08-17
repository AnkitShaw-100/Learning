// Inline SVGs used to avoid adding react-icons dependency
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white px-6 sm:px-16 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Column 1 - About */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">PropArk.</h2>
                    <p className="text-gray-300 mb-5 text-sm">
                        A proper place of value, convenience, and automated property solutions. We help you find homes effortlessly.
                    </p>
                    <div className="text-sm space-y-1 text-gray-200">
                        <p>📞 021-987-654</p>
                        <p>📧 propark@domain.com</p>
                    </div>
                    <div className="flex space-x-4 mt-4 text-white">
                        <a href="#" className="hover:text-blue-800" aria-label="facebook">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.03H8.54v-2.89h3.76V9.41c0-3.72 2.22-5.77 5.62-5.77 1.63 0 3.34.29 3.34.29v3.66h-1.88c-1.86 0-2.45 1.16-2.45 2.35v2.24h4.17l-.67 2.89h-3.5V22c4.78-.79 8.44-4.93 8.44-9.93z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-800" aria-label="twitter">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.89a4.28 4.28 0 001.32 5.71c-.6-.02-1.17-.18-1.66-.46v.05c0 2.13 1.52 3.9 3.54 4.3a4.28 4.28 0 01-1.93.07c.54 1.68 2.11 2.9 3.97 2.93A8.59 8.59 0 012 19.54a12.12 12.12 0 006.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.65 8.65 0 0022.46 6z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-800" aria-label="instagram">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm8 4a1 1 0 100 2 1 1 0 000-2zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 10a2 2 0 110 4 2 2 0 010-4z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm text-gray-200 space-y-2">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                    </ul>
                </div>

                {/* Column 3 - Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Be the first to hear about offers, new listings, and news. Unsubscribe anytime.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-200 hover:ring-2 hover:ring-blue-400 hover:bg-blue-50"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-blue-800 mt-14 pt-6 text-center text-sm text-gray-400">
                <p>&copy; 2025 PropArk. All Rights Reserved.</p>
                <div className="flex justify-center flex-wrap mt-3 gap-4 text-xs">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Jobs</a>
                    <a href="#" className="hover:text-white">Help</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;