import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button, Descriptions, Space } from 'antd'
import Image from 'next/image'
import cover from '../1.jpg'

const Book = () => {
  return (
    <div
      className="w-4/5 m-auto flex flex-row p-4"
      style={{ background: 'rgba(249, 250, 252, 1)' }}
    >
      <div className="relative -top-8 w-80 text-center">
        <div className="inline-block">
          <Image
            src={cover}
            width={230}
            height={280}
            alt="Picture of the author"
          />
          <p className="mt-3 mb-3">978-7-5220-1060-1</p>
        </div>
      </div>
      <div className="flex-1">
        <Descriptions
          className="mt-4"
          column={2}
          title="国家治理新使命：构建我国海外投资权益保护体系我是一个长题名需要换行完整展示"
        >
          <Descriptions.Item label="责任者">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="索书号">1810000000</Descriptions.Item>
          <Descriptions.Item label="出版社">
            Hangzhou, Zhejiang
          </Descriptions.Item>
          <Descriptions.Item label="出版时间">empty</Descriptions.Item>
          <Descriptions.Item label="分类号">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="主题">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="页码">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="载体形态">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="定价">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="语种">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="丛书名">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="版次">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <div>
          <Space>
            <Button icon={<StarOutlined style={{ verticalAlign: 0 }} />}>
              收藏
            </Button>
            <Button icon={<StarFilled style={{ verticalAlign: 0 }} />}>
              已收藏
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default Book
