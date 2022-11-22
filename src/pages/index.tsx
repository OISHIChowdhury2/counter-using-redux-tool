import Counter from '@components/Counter'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */

const Home: NextPage = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default Home
