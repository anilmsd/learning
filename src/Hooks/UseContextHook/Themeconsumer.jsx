import React, { useContext } from 'react';
import { Themecontext } from './Themeprovider';

export default function Themeconsumer() {
    const theme=useContext(Themecontext)
  return (
    <div>current theme is : {theme}</div>
  )
}
