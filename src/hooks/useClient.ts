import { Client } from "@lets-science/letsscience-client";

export const useClient = () => {
  const client = new Client({
    BASE: import.meta.env.VITE_BACKEND_URL,
    HEADERS: {
        'X-SESSION-TOKEN': localStorage.getItem('token') ?? ''
    }
  });

  return client
}