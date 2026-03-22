import React, { useState } from 'react';
import { Card, Row, Col, Typography, Switch, Input, Select, Button, Divider, Form, Upload, Avatar, Space, notification } from 'antd';
import { UserOutlined, SettingOutlined, BellOutlined, LockOutlined, TeamOutlined, MailOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const Settings = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  const handleSave = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      notification.success({
        message: 'Settings Saved',
        description: 'Your settings have been successfully updated.',
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to save settings. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <Card title="Profile Information" className="mb-4">
            <Form form={form} layout="vertical" onFinish={handleSave}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div className="text-center">
                    <Avatar 
                      size={80} 
                      icon={<UserOutlined />} 
                      className="mb-10"
                      src="https://via.placeholder.com/80x80"
                      style={{ 
                        backgroundColor: '#f0f0f0',
                        border: '2px solid #d9d9d9',
                        objectFit: 'cover'
                      }}
                    />
                    <div>
                      <Upload>
                        <Button icon={<UploadOutlined />}>Change Avatar</Button>
                      </Upload>
                    </div>
                  </div>
                </Col>
                <Col span={16}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Form.Item label="First Name" name="firstName" initialValue="John">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Last Name" name="lastName" initialValue="Smith">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Email" name="email" initialValue="john.smith@company.com">
                        <Input prefix={<MailOutlined />} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Phone" name="phone" initialValue="+1 234 567 8900">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Department" name="department" initialValue="IT Support">
                        <Select>
                          <Option value="IT Support">IT Support</Option>
                          <Option value="Customer Service">Customer Service</Option>
                          <Option value="Technical">Technical</Option>
                          <Option value="Billing">Billing</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Bio" name="bio" initialValue="Senior IT Support Specialist with 5+ years of experience">
                        <TextArea rows={3} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
        );
      case 'notifications':
        return (
          <Card title="Notification Preferences" className="mb-4">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={5}>Email Notifications</Title>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>New Ticket Assignments</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Get notified when tickets are assigned to you</Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Ticket Updates</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Receive updates for tickets you're following</Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>High Priority Tickets</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Alert for critical and high priority tickets</Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Daily Summary</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Daily digest of your ticket activity</Text>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Divider />

              <div>
                <Title level={5}>In-App Notifications</Title>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Desktop Notifications</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Show desktop notifications for important updates</Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Sound Alerts</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Play sound for new notifications</Text>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </Space>
          </Card>
        );
      case 'security':
        return (
          <Card title="Security Settings" className="mb-4">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={5}>Password</Title>
                <Form layout="vertical">
                  <Form.Item label="Current Password" name="currentPassword">
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label="New Password" name="newPassword">
                    <Input.Password />
                  </Form.Item>
                  <Form.Item label="Confirm New Password" name="confirmPassword">
                    <Input.Password />
                  </Form.Item>
                  <Button type="primary">Update Password</Button>
                </Form>
              </div>

              <Divider />

              <div>
                <Title level={5}>Two-Factor Authentication</Title>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Enable 2FA</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Add an extra layer of security to your account</Text>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Divider />

              <div>
                <Title level={5}>Login Activity</Title>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Text>Last login:</Text>
                    <Text>Today at 10:30 AM</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Login location:</Text>
                    <Text>New York, US</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Device:</Text>
                    <Text>Chrome on Windows</Text>
                  </div>
                </div>
              </div>
            </Space>
          </Card>
        );
      case 'system':
        return (
          <Card title="System Preferences" className="mb-4">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={5}>Appearance</Title>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Theme</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Choose your preferred theme</Text>
                    </div>
                    <Select style={{ width: 120 }}>
                      <Option value="light">Light</Option>
                      <Option value="dark">Dark</Option>
                      <Option value="auto">Auto</Option>
                    </Select>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Compact Mode</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Use more compact layout</Text>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Divider />

              <div>
                <Title level={5}>Language & Region</Title>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Language</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Select your preferred language</Text>
                    </div>
                    <Select style={{ width: 120 }}>
                      <Option value="en">English</Option>
                      <Option value="es">Spanish</Option>
                      <Option value="fr">French</Option>
                      <Option value="de">German</Option>
                    </Select>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Time Zone</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Set your time zone</Text>
                    </div>
                    <Select style={{ width: 150 }}>
                      <Option value="est">Eastern Time</Option>
                      <Option value="pst">Pacific Time</Option>
                      <Option value="cst">Central Time</Option>
                      <Option value="mst">Mountain Time</Option>
                    </Select>
                  </div>
                </div>
              </div>

              <Divider />

              <div>
                <Title level={5}>Data & Privacy</Title>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Analytics</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Help improve our service with usage data</Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <Text strong>Cookies</Text>
                      <br />
                      <Text type="secondary" className="text-xs">Allow cookies for personalized experience</Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </Space>
          </Card>
        );
      default:
        return (
          <Card title="Profile Information" className="mb-4">
            <Form form={form} layout="vertical" onFinish={handleSave}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div className="text-center">
                    <Avatar 
                      size={80} 
                      icon={<UserOutlined />} 
                      className="mb-10"
                      src="https://via.placeholder.com/80x80"
                      style={{ 
                        backgroundColor: '#f0f0f0',
                        border: '2px solid #d9d9d9',
                        objectFit: 'cover'
                      }}
                    />
                    <div>
                      <Upload>
                        <Button icon={<UploadOutlined />}>Change Avatar</Button>
                      </Upload>
                    </div>
                  </div>
                </Col>
                <Col span={16}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Form.Item label="First Name" name="firstName" initialValue="John">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Last Name" name="lastName" initialValue="Smith">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Email" name="email" initialValue="john.smith@company.com">
                        <Input prefix={<MailOutlined />} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Phone" name="phone" initialValue="+1 234 567 8900">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Department" name="department" initialValue="IT Support">
                        <Select>
                          <Option value="IT Support">IT Support</Option>
                          <Option value="Customer Service">Customer Service</Option>
                          <Option value="Technical">Technical</Option>
                          <Option value="Billing">Billing</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Bio" name="bio" initialValue="Senior IT Support Specialist with 5+ years of experience">
                        <TextArea rows={3} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
        );
    }
  };

  const tabs = [
    { key: 'profile', label: 'Profile', icon: <UserOutlined /> },
    { key: 'notifications', label: 'Notifications', icon: <BellOutlined /> },
    { key: 'security', label: 'Security', icon: <LockOutlined /> },
    { key: 'system', label: 'System', icon: <SettingOutlined /> }
  ];

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <Title level={2}>Settings</Title>
        <Button 
          type="primary" 
          icon={<SaveOutlined />} 
          loading={loading}
          onClick={() => form.submit()}
        >
          Save Changes
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Card title="Settings Menu" className="h-fit">
            <div className="space-y-2">
              {tabs.map(tab => (
                <div
                  key={tab.key}
                  className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                    activeTab === tab.key ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        <Col span={18}>
          {renderContent()}
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
