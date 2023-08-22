'use client'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import cover from './1.jpg'
import Image from 'next/image'

const Login = () => {
  return (
    <div className="flex">
      <div className="w-96 m-auto mt-40">
        <div className="text-center mb-28 flex justify-center items-center">
          <Image
            src={cover}
            className="rounded-full w-16 h-16 object-cover"
            alt="Picture of the author"
          />
          <span className="text-lg font-bold ml-6">演示图书馆</span>
        </div>
        <Form>
          <Form.Item>
            <Input size="large" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item>
            <Input.Password size="large" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button size="large" block type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
