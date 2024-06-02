import { DatabaseIcon } from "./DatabaseIcon"

export const Header = () => {
  return (
    <header className="bg-gray-900 py-4 px-6 md:px-8 lg:px-10">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <DatabaseIcon className="h-6 w-6 text-white mr-2" />
        <h1 className="text-white font-bold text-xl">SQL Formatter</h1>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-white">
          Features
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Pricing
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Contact
        </a>
      </nav>

      <button className="hidden md:inline-flex text-gray-400 hover:text-white ">
        Try it now
      </button>

    </div>
  </header>
  )
}
