const Footer = () => {
    return (
        <footer className="py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Team Unity</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-yellow-500 hover:text-yellow-400 transition duration-300">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-yellow-500 hover:text-yellow-400 transition duration-300">
                        Terms of Service
                    </a>
                    <a href="#" className="text-yellow-500 hover:text-yellow-400 transition duration-300">
                        Contact Us
                    </a>
                </div>
                <p className="text-sm mt-4">
                    Designed and developed with ❤️ by Team unity
                </p>
            </div>
        </footer>
    );
};

export default Footer;