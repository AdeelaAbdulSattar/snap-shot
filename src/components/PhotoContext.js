import React, { createContext, useState } from "react";
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    // axios
    //   .get(
    //     `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    //   )
    //   .then((response) => {
    //     setImages(response.data.photos.photo);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log("Error", error);
    //   });
  };
  return (
    <PhotoContext.Provider value={(images, loading, runSearch)}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
