'use client' // 如果是在 Pages Router 中使用，则不需要加这行

import React from 'react'
import { Tabs } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { TabResource, TabTable, Book } from './compontents'

const Detail = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-60"></div>
        <div className="w-60">
          <BellOutlined />
        </div>
      </div>
      <div className="h-80"></div>
      <Book />
      <div className="w-4/5 m-auto">
        <Tabs
          items={[
            { label: '资源详情', key: '1', children: <TabResource /> },
            { label: '在馆/馆藏', key: '2', children: <TabTable /> }
            // { label: '关联资源', key: '3', children: '内容 3' }
          ]}
        />
      </div>
    </div>
  )
}

export default Detail
