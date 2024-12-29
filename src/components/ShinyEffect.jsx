import React from 'react'

const ShinyEffect = ({left, right, top, size = 500}) => {

     const positionStyles = {
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        zIndex: -1
     }

     if(left != undefined){
        positionStyles.left = `${left}px`
     }

     if(right != undefined){
        positionStyles.right = `${right}px`
     }

  return (
    <div className='shiny-effect' style={positionStyles}></div>
  )
}

export default ShinyEffect