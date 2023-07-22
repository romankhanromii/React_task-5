import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetch_Task5 = () => {
  const [imageData, setImageData] = useState([]);
  const [loadingFullSize, setLoadingFullSize] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/JSTask');
        const data = response.data.data; // Access the 'data' array in the response
        console.log(data)
        if (Array.isArray(data) && data.every(item => 'image' in item && 'thumbnail' in item)) {
          // Map the data to the expected format with 'small_image' and 'large_image'
          const formattedData = data.map(item => ({
            small_image: item.thumbnail,
            large_image: item.image
          }));

          setImageData(formattedData);
          setLoadingFullSize(new Array(formattedData.length).fill(false));
          setError(null); // Reset error if data is valid
        } else {
          setError('Invalid data received from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data from the API');
      }
    };

    fetchImageData();
  }, []);

  const handleImageLoad = (index) => {
    const newLoadingState = [...loadingFullSize];
    newLoadingState[index] = true;
    setLoadingFullSize(newLoadingState);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="image-grid">
      {imageData.map((item, index) => (
        <div key={index} className="image-container">
          {!loadingFullSize[index] ? (
            <>
              <img src={item.small_image} alt={`Small ${index}`} />
              <img
                src={item.large_image}
                alt={`Large ${index}`}
                style={{ opacity: 0 }}
                onLoad={() => handleImageLoad(index)}
              />
            </>
          ) : (
            <img src={item.large_image} alt={`Large ${index}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Fetch_Task5;
