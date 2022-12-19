import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
        <Layout title="Home / Twitter">
            <div className='h-screen flex flex-row'>
            <Sidebar />
            </div>
        </Layout>
    </div>
  )
}

export default Home