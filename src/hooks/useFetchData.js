import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
        setData(res.data); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return { data, loading, error };
};

export default useFetch;
