import React from 'react'

interface UnderConstructionProps {
    page: string
}


const UnderConstruction = ({page}:UnderConstructionProps) => {
  return (
    <div style={{height: "100vh", width: "100%"}}>
        <h1>{`${page} page`}</h1>
        <h2>This Page is still under construction</h2>
    </div>
  )
}

export default UnderConstruction
