import React, { useState } from 'react';
import { Card, Row, Col, Typography, Select, DatePicker, Button, Table, Progress, Divider } from 'antd';
import { FileTextOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const Reports = () => {
  const [dateRange, setDateRange] = useState(null);
  const [reportType, setReportType] = useState('overview');

  const ticketTrendData = [
    { name: 'Mon', open: 65, resolved: 28, created: 45 },
    { name: 'Tue', open: 59, resolved: 48, created: 52 },
    { name: 'Wed', open: 80, resolved: 40, created: 38 },
    { name: 'Thu', open: 81, resolved: 55, created: 48 },
    { name: 'Fri', open: 56, resolved: 65, created: 62 },
    { name: 'Sat', open: 55, resolved: 45, created: 35 },
    { name: 'Sun', open: 40, resolved: 38, created: 28 }
  ];

  const priorityData = [
    { name: 'Critical', value: 10, color: '#ff4d4f' },
    { name: 'High', value: 15, color: '#ff7a45' },
    { name: 'Medium', value: 45, color: '#ffa940' },
    { name: 'Low', value: 30, color: '#52c41a' }
  ];

  const statusData = [
    { name: 'Open', value: 80, color: '#1890ff' },
    { name: 'Pending', value: 5, color: '#faad14' },
    { name: 'Resolved', value: 5, color: '#52c41a' },
    { name: 'In Progress', value: 4, color: '#722ed1' },
    { name: 'Closed', value: 6, color: '#13c2c2' }
  ];

  const agentPerformanceColumns = [
    { title: 'Agent', dataIndex: 'agent', key: 'agent' },
    { title: 'Tickets Handled', dataIndex: 'handled', key: 'handled' },
    { title: 'Avg Response Time', dataIndex: 'responseTime', key: 'responseTime' },
    { title: 'Resolution Rate', dataIndex: 'resolutionRate', key: 'resolutionRate', render: (rate) => `${rate}%` },
    { title: 'Customer Satisfaction', dataIndex: 'satisfaction', key: 'satisfaction', render: (sat) => `${sat}/5` }
  ];

  const agentPerformanceData = [
    { key: '1', agent: 'John Smith', handled: 25, responseTime: '2.5 hrs', resolutionRate: 92, satisfaction: 4.5 },
    { key: '2', agent: 'Sarah Johnson', handled: 20, responseTime: '1.8 hrs', resolutionRate: 88, satisfaction: 4.7 },
    { key: '3', agent: 'Mike Wilson', handled: 18, responseTime: '3.2 hrs', resolutionRate: 85, satisfaction: 4.2 },
    { key: '4', agent: 'Emily Davis', handled: 22, responseTime: '2.1 hrs', resolutionRate: 90, satisfaction: 4.6 },
    { key: '5', agent: 'Alex Brown', handled: 15, responseTime: '4.5 hrs', resolutionRate: 80, satisfaction: 4.0 }
  ];

  const categoryColumns = [
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Total Tickets', dataIndex: 'total', key: 'total' },
    { title: 'Open', dataIndex: 'open', key: 'open' },
    { title: 'Resolved', dataIndex: 'resolved', key: 'resolved' },
    { title: 'Avg Resolution Time', dataIndex: 'avgTime', key: 'avgTime' }
  ];

  const categoryData = [
    { key: '1', category: 'Technical Support', total: 45, open: 20, resolved: 25, avgTime: '3.2 hrs' },
    { key: '2', category: 'Billing', total: 25, open: 8, resolved: 17, avgTime: '2.1 hrs' },
    { key: '3', category: 'Account Issues', total: 18, open: 12, resolved: 6, avgTime: '4.5 hrs' },
    { key: '4', category: 'Feature Request', total: 12, open: 10, resolved: 2, avgTime: '24 hrs' }
  ];

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <Title level={2}>Reports & Analytics</Title>
        <div className='flex gap-3'>
          <RangePicker onChange={setDateRange} />
          <Select value={reportType} onChange={setReportType} style={{ width: 150 }}>
            <Option value="overview">Overview</Option>
            <Option value="performance">Performance</Option>
            <Option value="trends">Trends</Option>
          </Select>
          <Button type="primary" icon={<DownloadOutlined />}>
            Export Report
          </Button>
        </div>
      </div>

      <Row gutter={[16, 16]} className='mb-6'>
        <Col span={6}>
          <Card>
            <div className='flex items-center gap-3'>
              <div className='card-icon bg-blue-100 text-blue-600 p-3 rounded-lg'>
                <FileTextOutlined />
              </div>
              <div>
                <Text type='secondary'>Total Tickets</Text>
                <div className='text-2xl font-bold'>100</div>
                <Text type='success'>+12% from last month</Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className='flex items-center gap-3'>
              <div className='card-icon bg-green-100 text-green-600 p-3 rounded-lg'>
                <FileTextOutlined />
              </div>
              <div>
                <Text type='secondary'>Resolved</Text>
                <div className='text-2xl font-bold'>5</div>
                <Text type='success'>+8% from last month</Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className='flex items-center gap-3'>
              <div className='card-icon bg-orange-100 text-orange-600 p-3 rounded-lg'>
                <FileTextOutlined />
              </div>
              <div>
                <Text type='secondary'>Avg Response Time</Text>
                <div className='text-2xl font-bold'>2.8h</div>
                <Text type='danger'>+0.3h from last month</Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className='flex items-center gap-3'>
              <div className='card-icon bg-purple-100 text-purple-600 p-3 rounded-lg'>
                <FileTextOutlined />
              </div>
              <div>
                <Text type='secondary'>Satisfaction Rate</Text>
                <div className='text-2xl font-bold'>4.4/5</div>
                <Text type='success'>+0.2 from last month</Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className='mt-10'>
        <Col span={16}>
          <Card title="Ticket Trends" className='mb-4'>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ticketTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="open" stroke="#1890ff" strokeWidth={2} />
                <Line type="monotone" dataKey="resolved" stroke="#52c41a" strokeWidth={2} />
                <Line type="monotone" dataKey="created" stroke="#faad14" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Agent Performance">
            <Table 
              columns={agentPerformanceColumns} 
              dataSource={agentPerformanceData} 
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Tickets by Priority" className='mb-4'>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={priorityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {priorityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className='mt-4'>
              {priorityData.map((item, index) => (
                <div key={index} className='flex justify-between items-center mb-2'>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className='font-semibold'>{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Tickets by Status">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={statusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Card title="Category Analysis" className='mt-4'>
        <Table 
          columns={categoryColumns} 
          dataSource={categoryData} 
          pagination={false}
          size="middle"
        />
      </Card>
    </div>
  );
};

export default Reports;
