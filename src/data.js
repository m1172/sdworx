import axios from 'axios';
import React from 'react';

export default function data() {
  useEffect(() => {
    if (categoriesData?.length == 0) {
      axios
        .get(`https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers`)
        .then((response) => {
          response.data;
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
  }, []);
}
