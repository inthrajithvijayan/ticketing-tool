import React, { useState } from 'react';
import { Card, Row, Col, Typography, Tag, Button, Input, Select, Space, Avatar, Badge, Tooltip } from 'antd';
import {
  UserOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  FilterOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;
const { Search } = Input;

const Tickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Temporary ticket data
  const ticketsData = [
    {
      id: 'TKT-001',
      title: 'Login page not responding',
      description: 'Users are unable to access the login page. Getting timeout errors when trying to authenticate.',
      status: 'open',
      priority: 'critical',
      category: 'Technical Support',
      assignee: 'John Smith',
      requester: 'Alice Johnson',
      createdAt: '2024-03-22 09:30',
      updatedAt: '2024-03-22 10:45',
      dueDate: '2024-03-22 18:00',
      responses: 3
    },
    {
      id: 'TKT-002',
      title: 'Invoice not generated for order #12345',
      description: 'Customer completed payment but invoice was not automatically generated. Need manual intervention.',
      status: 'pending',
      priority: 'high',
      category: 'Billing',
      assignee: 'Sarah Johnson',
      requester: 'Bob Wilson',
      createdAt: '2024-03-22 08:15',
      updatedAt: '2024-03-22 09:20',
      dueDate: '2024-03-23 12:00',
      responses: 2
    },
    {
      id: 'TKT-003',
      title: 'Feature request: Dark mode support',
      description: 'User requesting dark mode theme for better accessibility during night usage.',
      status: 'in-progress',
      priority: 'medium',
      category: 'Feature Request',
      assignee: 'Mike Wilson',
      requester: 'Carol Davis',
      createdAt: '2024-03-21 14:20',
      updatedAt: '2024-03-22 11:00',
      dueDate: '2024-03-28 18:00',
      responses: 10
    },
    {
      id: 'TKT-004',
      title: 'Password reset email not received',
      description: 'Customer requested password reset but never received the reset email. Checked spam folder too.',
      status: 'resolved',
      priority: 'low',
      category: 'Account Issues',
      assignee: 'Emily Davis',
      requester: 'David Brown',
      createdAt: '2024-03-21 10:00',
      updatedAt: '2024-03-21 16:30',
      dueDate: '2024-03-22 12:00',
      responses: 4
    },
    {
      id: 'TKT-005',
      title: 'API response time degradation',
      description: 'Noticing significant slowdown in API response times, especially during peak hours.',
      status: 'open',
      priority: 'high',
      category: 'Technical Support',
      assignee: 'Alex Brown',
      requester: 'System Monitor',
      createdAt: '2024-03-22 07:45',
      updatedAt: '2024-03-22 09:15',
      dueDate: '2024-03-22 15:00',
      responses: 1
    },
    {
      id: 'TKT-006',
      title: 'Unable to export reports to PDF',
      description: 'Export functionality works for Excel but fails when trying to generate PDF reports.',
      status: 'pending',
      priority: 'medium',
      category: 'Technical Support',
      assignee: 'John Smith',
      requester: 'Emma Martinez',
      createdAt: '2024-03-21 15:30',
      updatedAt: '2024-03-21 15:30',
      dueDate: '2024-03-25 18:00',
      responses: 0
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'open': 'blue',
      'pending': 'orange',
      'in-progress': 'purple',
      'resolved': 'green',
      'closed': 'default'
    };
    return colors[status] || 'default';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'critical': 'red',
      'high': 'orange',
      'medium': 'gold',
      'low': 'green'
    };
    return colors[priority] || 'default';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'open': <ClockCircleOutlined />,
      'pending': <ExclamationCircleOutlined />,
      'in-progress': <SyncOutlined spin />,
      'resolved': <CheckCircleOutlined />,
      'closed': <CheckCircleOutlined />
    };
    return icons[status] || <ClockCircleOutlined />;
  };

  const filteredTickets = ticketsData.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const TicketCard = ({ ticket }) => (
    <Card
      className="ticket-card mb-4 mt-10"
      hoverable
      actions={[
        <Tooltip title="View Details">
          <EyeOutlined key="view" />
        </Tooltip>,
        <Tooltip title="Edit">
          <EditOutlined key="edit" />
        </Tooltip>,
        <Tooltip title="Delete">
          <DeleteOutlined key="delete" />
        </Tooltip>
      ]}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <Title level={10} className="mb-1">
            <Text strong>{ticket.id}: {ticket.title}</Text>
          </Title>
          <Text type="secondary" className="text-sm">
            {ticket.category}
          </Text>
        </div>
        <Space direction="vertical" align="end" size="small">
          <Tag color={getPriorityColor(ticket.priority)} className="mb-1">
            {ticket.priority.toUpperCase()}
          </Tag>
          <Tag color={getStatusColor(ticket.status)} icon={getStatusIcon(ticket.status)}>
            {ticket.status.replace('-', ' ').toUpperCase()}
          </Tag>
        </Space>
      </div>

      <Text className="mb-3 block" ellipsis={{ rows: 2 }}>
        {ticket.description}
      </Text>

      <div className="flex justify-between items-center mb-3">
        <Space>
          <Avatar size="small" icon={<UserOutlined />} />
          <div>
            <Text strong className="text-sm">{ticket.assignee}</Text>
            <br />
            <Text type="secondary" className="text-xs">Assigned to</Text>
          </div>
        </Space>
        <Space direction="vertical" align="end" size="small">
          <Text className="text-sm">
            <ClockCircleOutlined className="mr-5" />
            Due: {ticket.dueDate.split(' ')[1]}
          </Text>
          <Badge count={ticket.responses} showZero className="text-xs">
            <Text type="secondary">Responses</Text>
          </Badge>
        </Space>
      </div>

      <div className="border-t pt-3">
        <div className="flex justify-between items-center">
          <Text type="secondary" className="text-xs">
            Requester: {ticket.requester}
          </Text>
          <Text type="secondary" className="text-xs">
            Created: {ticket.createdAt}
          </Text>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="p-6" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <style jsx>{`
        .tickets-scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .tickets-scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .tickets-scroll-container::-webkit-scrollbar-thumb {
          background: #d9d9d9;
          border-radius: 3px;
        }
        .tickets-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #bfbfbf;
        }
        .tickets-scroll-container {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Fixed Header */}
      <div style={{ flexShrink: 0 }}>
        <div className="flex justify-between items-center mb-6">
          <Title level={2}>Tickets</Title>
          <Button type="primary">Create New Ticket</Button>
        </div>

        {/* Fixed Filters */}
        <Card className="mb-4">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Search
                placeholder="Search tickets..."
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs={24} md={6}>
              <Select
                placeholder="Filter by Status"
                size="large"
                style={{ width: '100%' }}
                value={statusFilter}
                onChange={setStatusFilter}
              >
                <Option value="all">All Status</Option>
                <Option value="open">Open</Option>
                <Option value="pending">Pending</Option>
                <Option value="in-progress">In Progress</Option>
                <Option value="resolved">Resolved</Option>
                <Option value="closed">Closed</Option>
              </Select>
            </Col>
            <Col xs={24} md={6}>
              <Select
                placeholder="Filter by Priority"
                size="large"
                style={{ width: '100%' }}
                value={priorityFilter}
                onChange={setPriorityFilter}
              >
                <Option value="all">All Priority</Option>
                <Option value="critical">Critical</Option>
                <Option value="high">High</Option>
                <Option value="medium">Medium</Option>
                <Option value="low">Low</Option>
              </Select>
            </Col>
          </Row>
        </Card>

        {/* Fixed Statistics Cards */}
        <Row gutter={[16, 16]} className="mb-6 mt-10">
          <Col xs={24} sm={12} md={6}>
            <Card size="small">
              <div className="text-center">
                <Title level={3} className="mb-0">6</Title>
                <Text type="secondary">Total Tickets</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card size="small">
              <div className="text-center">
                <Title level={3} className="mb-0 text-blue-600">2</Title>
                <Text type="secondary">Open</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card size="small">
              <div className="text-center">
                <Title level={3} className="mb-0 text-orange-600">2</Title>
                <Text type="secondary">Pending</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card size="small">
              <div className="text-center">
                <Title level={3} className="mb-0 text-green-600">1</Title>
                <Text type="secondary">Resolved</Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Scrollable Content Area */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Row gutter={[16, 16]} style={{ height: '100%' }}>
          <Col xs={24} lg={16} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Title level={4} className="mb-4" style={{ flexShrink: 0 }}>
              Tickets ({filteredTickets.length})
            </Title>
            <div
              className="tickets-scroll-container"
              style={{
                flex: 1,
                overflowY: 'auto',
                paddingRight: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#d9d9d9 transparent'
              }}
            >
              {filteredTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </Col>

          <Col xs={24} lg={8} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Card title="Quick Stats" size="small" className="mb-4 mt-10" style={{ flexShrink: 0 }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <div className="flex justify-between">
                  <Text>Critical Priority:</Text>
                  <Tag color="red">1</Tag>
                </div>
                <div className="flex justify-between">
                  <Text>High Priority:</Text>
                  <Tag color="orange">2</Tag>
                </div>
                <div className="flex justify-between">
                  <Text>Overdue:</Text>
                  <Tag color="red">0</Tag>
                </div>
                <div className="flex justify-between">
                  <Text>Due Today:</Text>
                  <Tag color="blue">3</Tag>
                </div>
              </Space>
            </Card>

            <Card className="mt-10" title="Recent Activity" size="small" style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ height: '100%', overflowY: 'auto', paddingRight: '8px' }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div>
                    <Text strong>TKT-004</Text>
                    <br />
                    <Text type="secondary" className="text-xs">Resolved by Emily Davis</Text>
                    <br />
                    <Text type="secondary" className="text-xs">2 hours ago</Text>
                  </div>
                  <div>
                    <Text strong>TKT-003</Text>
                    <br />
                    <Text type="secondary" className="text-xs">Updated by Mike Wilson</Text>
                    <br />
                    <Text type="secondary" className="text-xs">3 hours ago</Text>
                  </div>
                  <div>
                    <Text strong>TKT-002</Text>
                    <br />
                    <Text type="secondary" className="text-xs">Status changed to Pending</Text>
                    <br />
                    <Text type="secondary" className="text-xs">10 hours ago</Text>
                  </div>
                </Space>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tickets;
