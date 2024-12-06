import React from 'react'
import Themeprovider from './Themeprovider';
import Themeconsumer from './Themeconsumer';

export default function Main() {
  return (
    <Themeprovider>
        <Themeconsumer/>
    </Themeprovider>
  )
}
