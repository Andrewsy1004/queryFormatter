import { toast } from 'react-toastify';

export const SqlPeticion = async (query: string) => {
  const KeyWords = ["select", "where", "from", "join", "order by", "group by", "limit", "insert", "update", "delete"];
  
  if (KeyWords.some((word) => query.toLowerCase().includes(word))) {
    try {
      const response = await fetch('http://localhost:3000/api/query-sql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const responseQuery = await response.json();
      return responseQuery;

    } catch (error: any) {
      toast.error(`Error en la solicitud: ${error.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } else {
    toast.error('Error de sintaxis', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
