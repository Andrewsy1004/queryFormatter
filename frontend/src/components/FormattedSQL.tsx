export const FormattedSQL = ({ query }: { query: string }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 md:p-8 lg:p-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Formatted SQL
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-sm md:text-base lg:text-lg font-mono text-gray-800 dark:text-gray-200 overflow-auto">
                <code className="language-sql">
                    {query}
                </code>
            </pre>
        </div>
    )
}
