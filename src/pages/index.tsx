import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import play from '../playground';

export default function Home() {

  useEffect(() => {
    play();
  }, [])
  

  return (
    <div>
      Hello World!
    </div>
  )
}
 