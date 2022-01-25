import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [Data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(false);
  // fetching data from api

  useEffect(() => {
    const abortCtrl = new AbortController();

    // just a to delay the fetch alittle bit more for the loading to show
    
      // minvoke the function
      // fetchData();
      fetch(url, { signal: abortCtrl.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          seterror(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setisLoading(false);
            seterror(err.message);
          }
        });
   

    // and this return gonna make sure that when the conponent renders it will pause the abortctrl signal
    return () => abortCtrl.abort();
  }, [url]);
  // dynamic data we get from the component that use this costume hook
  // and make use this data over and over every time we invoke the ueFetch hook
  return { Data, isLoading, error };
};

export default useFetch;
//! fetch data async cant get the err.name to check for the aborterror in the catch block  , fix for later subject [useeffect cleanup in async fetch]
// const fetchData = async () => {
//   const abortCtrl = new AbortController()

//   try {
//     // associating the abortController to the fetch to prevent it from running when the components is not mounted
//     const res = await fetch(url ,{ signal:abortCtrl.signal});
//     const Data = await res.json();
//     console.log(Data);

//     // handling the error
//     if (res.ok != true) {
//       throw Error("couldnt connect to the server");
//     }

//     // get rid of the error if the problem solved
//     seterror(null);
//     // update the blogs value
//     setData(Data);
//     setisLoading(false);
//   } catch (err) {
//     if (err.name === 'AbortError'){
//       console.log('fetch aborted')
//     }else {

//       console.log(err.name);
//       setisLoading(false);
//       seterror(err.message);
//     }

//   }
// }