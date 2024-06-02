export const Footer = () => {
    return (
        <footer className="bg-gray-900 py-6 px-6 md:px-8 lg:px-10">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-gray-400 text-sm">&copy; 2024 SQL Formatter. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Privacy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Terms
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}
