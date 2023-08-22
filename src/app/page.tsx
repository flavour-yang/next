// import Image from 'next/image'
'use client'

import React from 'react'
import { Button, ConfigProvider } from 'antd'
// import 'antd/dist/antd.css'
// theme={theme}
// ConfigProvider.config({
//   prefixCls: 'custom',
//   theme: {
//     primaryColor: 'rgba(207, 159, 108, 1)'
//   }
// })
const HomePage = () => (
  <ConfigProvider>
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
)

export default HomePage
