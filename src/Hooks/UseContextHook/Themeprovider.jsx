import React, { createContext } from 'react'
export const Themecontext = createContext();

export default function Themeprovider({children}) {
    
    const theme="dark";

  return (
   <Themecontext.Provider value={theme}>
    {children}
   </Themecontext.Provider>
  )
}
