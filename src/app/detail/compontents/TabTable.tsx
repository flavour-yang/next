import { Table } from 'antd'

const TabTable = () => {
  const columns: any[] = [
    {
      title: '所属馆',
      dataIndex: 'address'
    },
    {
      title: '所在馆藏地',
      dataIndex: 'address'
    },
    {
      title: '条码',
      dataIndex: 'age'
    },
    {
      title: '馆藏状态',
      dataIndex: 'address'
    },
    {
      title: '文献流通类型',
      dataIndex: 'name'
    },
    {
      title: '资源类型',
      dataIndex: 'address'
    },
    {
      title: '架位号',
      dataIndex: 'address'
    },
    {
      title: '索书号',
      dataIndex: 'address'
    },
    {
      title: '可借数',
      dataIndex: 'address'
    },
    {
      title: '',
      width: 120
    }
  ]
  const data: any[] = [
    {
      key: 1,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
          key: 11,
          name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park'
        },
        {
          key: 12,
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park'
        },
        {
          key: 13,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No. 1 Lake Park'
        }
      ]
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ]
  return <Table columns={columns} dataSource={data} pagination={false}/>
}

export default TabTable
