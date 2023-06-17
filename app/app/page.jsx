import Layout from '@/components/layout/Layout'
import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import React, { Children } from 'react'

const App = ({
    children
}) => {
  return (
    <div className=''>
      <Layout>
        Main Content for app
      </Layout>
    </div>
  )
}

export default App
