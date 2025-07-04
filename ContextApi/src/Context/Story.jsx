import React, { createContext } from 'react'
export const story = createContext()


function Story({children}) {
    let kahani = "Ek din ....."
  return (
    <div>
      <story.Provider value = {kahani}>
            {children}
      </story.Provider>
    </div>
  )
}

export default Story
