import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileTextOutlined,
  DashboardOutlined,
  BookOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Routes, Route, useNavigate } from "react-router"
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Dashboard from './Views/Dashboard';
import Settings from './Views/Settings';
import Reports from './Views/Reports';
import Tickets from './Views/Tickets';
import { Typography } from 'antd';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Set document title
  useEffect(() => {
    document.title = 'Ticketing Tool - Support System';
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [pTittle, setPageTittle] = useState('dashboard');
  const setTitle = (val) => {
    val = val !== '' ? val.replace('/', '') : '';
    setPageTittle(val)
  }

  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Layout style={{ minHeight: '100v' }}>
        <Sider trigger={null} collapsible collapsed={collapsed} className={`slider ${collapsed ? 'slider-min' : 'slider-max'}`}>
    
          <div className="sidebar-header" style={{ 
            padding: collapsed ? '16px 8px' : '16px 24px', 
            borderBottom: '1px solid #303030',
            textAlign: 'center'
          }}>
            <Title 
              level={collapsed ? 5 : 4} 
              style={{ 
                color: '#ffffff', 
                margin: 0,
                fontSize: collapsed ? '14px' : '18px',
                fontWeight: 'bold'
              }}
            >
              {collapsed ? 'TT' : 'Ticketing Tool'}
            </Title>
            {!collapsed && (
              <div style={{ 
                color: '#8c8c8c', 
                fontSize: '12px',
                // marginTop: '4px'
              }}>
              </div>
            )}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={['/dashboard']}
            onClick={(e) => { navigate(e.key); setTitle(e.key) }}
            items={[
              {
                key: '/dashboard',
                icon: <DashboardOutlined />,
                label: 'Dashboard',
              },
              {
                key: '/tickets',
                icon: <FileTextOutlined />,
                label: 'Tickets',
              },
              {
                key: '/reports',
                icon: <BookOutlined />,
                label: 'Reports',
              },
              {
                key: '/settings',
                icon: <SettingOutlined />,
                label: 'Settings',
              }
            ]}
          />
        </Sider>
        <Layout style={{ marginLeft: collapsed ? '68px' : '240px', transition: 'marginLeft 0.2s', marginBottom:'30px' }}>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Title level={4} className='page-title'>{pTittle}</Title>
          <Content style={{ margin: '0 16px 0 16px', minHeight: 0, flex: 1 }}>
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/tickets" element={<Tickets />} />
              <Route exact path="/reports" element={<Reports />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="*" element={<Dashboard />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;