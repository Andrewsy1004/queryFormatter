
import toast from "react-hot-toast";

export const FormattedSQL = ({ query }: { query: string }) => {
  const copyToClipboard = () => {
    if (!query) {
      toast.error('No SQL query to copy!');
      return;
    }

    navigator.clipboard.writeText(query).then(
      () => {
        toast.success('SQL query copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 md:p-8 lg:p-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Formatted SQL
        </h3>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white rounded px-3 py-1.5 text-xs md:text-sm lg:text-base hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Copy
        </button>
      </div>
      <div className="relative min-h-[200px]">
        <pre className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-sm md:text-base lg:text-lg font-mono text-gray-800 dark:text-gray-200 overflow-auto max-h-[300px] whitespace-pre-wrap break-words scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <code className="language-sql">{query}</code>
        </pre>
      </div>
    </div>
  );
};
