import React, { createContext, useEffect, useState } from "react";

// Create a context
const UserContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=15")
            .then((response) => response.json())
            .then((responseData) => setData(responseData.results))
            .catch((error) => console.error(error));
    },[]);

    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, DataProvider };
