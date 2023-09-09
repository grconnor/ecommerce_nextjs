import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  const message: string = "Hello World!";

  return (
    <div>
      {message}
    </div>
  )
}
 