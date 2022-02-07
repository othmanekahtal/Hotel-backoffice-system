import { useEffect, useState } from 'react';

export default function useBookRoom(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (function () {
            try {
                // const response = await axios.get(`${url}/${id}`)
                // setData(response.data);
                fetch(`${url}`)
                    .then((res) => res.json())
                    .then((data) => setData(data));
            } catch (err) {
                setError(err);
            }
        })();
    }, [url]);

    return {
        data,
        error,
        loading
    };
}
