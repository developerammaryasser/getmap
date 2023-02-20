import { Button } from 'flowbite-react'
import React from 'react'
const ButtonPrimary = ({children,className}) => {
  return (
    <Button color={"white"} className={`shadow-lg bg-white hover:bg-accent-primary_hover text-primary group hover:text-white transition-all duration-300 ${className}`} size="xl" pill={true}>{children}</Button>
  )
}

export default ButtonPrimary