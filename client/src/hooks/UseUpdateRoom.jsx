import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookRoom(url, id, customerId) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                // const response = await axios.get(`${url}/${id}`)
                // setData(response.data);
                fetch(`${url}/${id}`).then((res) => res.json()).then((data) => setData(data))
            } catch (err) {
                setError(err);
            } 
        })();
    }, [url]);

    return { data, error, loading };
}
