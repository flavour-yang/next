'use client'

import React from 'react'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'
import { ConfigProvider } from 'antd'

ConfigProvider.config({
  theme: {
    primaryColor: 'rgba(207, 159, 108, 1)'
  }
})

const StyledComponentsRegistry = ({
  children
}: {
  children: React.ReactNode
}) => {
  const cache = createCache()
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ))
  return (
    <ConfigProvider>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </ConfigProvider>
  )
}

export default StyledComponentsRegistry
