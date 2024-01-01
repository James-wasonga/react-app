import React from 'react'

interface Props{
    children: string;
    color: string;
    onClick: () => void;
}

const Button =({children, onClick, color='primary'}:Props) => {
  return (
    <button className={'btn btn-' + color} onClick ={() => console.log('clicked')} >Button</button>
  )
}

export default Button 