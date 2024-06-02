import { useState } from "react";
import { FormattedSQL } from "./FormattedSQL"
import { SQLFormatter } from "./SQLFormatter"
import { SqlPeticion } from "../helpers/SqlPeticion";

export const MainSection = () => {
  const [formattedQuery, setFormattedQuery] = useState('');

  const handleQuerySubmission = async (query: string) => {
    try {
      const result = await SqlPeticion(query);
      setFormattedQuery(result.query); 
    } catch (err) {
      throw new Error('Error');
    }
  };


  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-900">
      <section className="container mx-auto py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <SQLFormatter onSubmit={handleQuerySubmission} />
          <FormattedSQL query={formattedQuery} />
        </div>
      </section>
    </main>
  )
}
