
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Formatted SQL
      </h3>
      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-sm md:text-base lg:text-lg font-mono text-gray-800 dark:text-gray-200 overflow-auto">
          <code className="language-sql">{query}</code>
        </pre>

        <button
          onClick={copyToClipboard}
          className="absolute top-0 right-0  bg-blue-500 text-white rounded px-2 py-1 text-xs md:text-sm lg:text-base hover:bg-blue-600 focus:outline-none"
        >
          Copy
        </button>

      </div>
    </div>
  );
};
