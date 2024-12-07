import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [ captain , setCaptain ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  }
  
  const value = {
    captain, 
    setCaptain,
    isLoading, 
    setIsLoading,
    error,
    setError,
    updateCaptain
  }

  return (
    <div>
      <CaptainDataContext.Provider
         value = { value } >
          {children}
      </CaptainDataContext.Provider>
    </div>
  );
}

export default CaptainContext
