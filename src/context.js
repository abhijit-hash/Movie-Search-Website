import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=c009bc1d&s=titanic`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                setIsError({ show: "false", msg: "" });
            }
            else {
                setIsError({ show: "true", msg: data.Error });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovies(API_URL);
    },[]);

    return <AppContext.Provider value={{ isLoading, isError, movie }}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext,AppContext,AppProvider };