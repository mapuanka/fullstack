import React from 'react'


const Header = ({name, size}) => {
  console.log(size)

if (size==='1') {
  return ( 
    <div><h1>{name}</h1></div>
  )
} else {
  return ( 
    <div><h2>{name}</h2></div>
  )
}
   
                
}
export default Header