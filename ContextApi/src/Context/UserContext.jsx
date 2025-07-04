import React, { createContext } from 'react'
export const data =createContext()

function UserContext({children}) {
    // we want to make this variable a global
    let username = "VIRTUAL CODE"
  return (
    <div>
        <data.Provider value = {username}>
            {children}
        </data.Provider>
      
    </div>

  )
}

export default UserContext
