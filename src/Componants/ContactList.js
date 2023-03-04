import React from 'react'

export default function ContactList(props) {  
   let css={
    marginLeft:'10em',
    fontSize: '18px',
    border: '1px solid red'
   }
  return (
    <>
    <div className='container'>
      <div className='pic' style={css}>
        <img src='https://api.lorem.space/image/movie?w=150&h=220'></img> 
        
      </div>
        <h4  style={css}>akshay  Prakash Patil</h4>
    </div>
    
    </>
    
  )
}
