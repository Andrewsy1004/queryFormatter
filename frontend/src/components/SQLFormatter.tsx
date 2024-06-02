import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SQLFormatter = ({ onSubmit }: { onSubmit: (query: string) => void }) => {
    const [query, setQuery] = useState<string>("")
    
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        onSubmit(query)
    }

    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Format your SQL queries with ease
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our SQL formatter helps you keep your code clean and organized. Just paste your query and let us do the rest.
            </p>
            <form className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Enter your SQL query"
                    value={query}
                    onChange={handleQueryChange}
                    className="flex-1 bg-white dark:bg-gray-800 dark:text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <button 
                   type="submit"
                   onClick={handleSubmit}
                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-full">
                    Format
                </button>
                <ToastContainer />
                
            </form>
        </div>
    )
}
