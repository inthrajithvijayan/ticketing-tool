import React from 'react'
import { Card, Col, Row, Typography, Flex, Progress } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
const { Text } = Typography;

const Dashboard = () => {
  return (
    <div className=''>
      <Row>
        <Col span={6}>
          <Card className="" variant="borderless" >
            <div className='flex gap-3 items-center'>
              <div className='card-icon bg-primary-light text-primary'><FileTextOutlined /></div>
              <div className='flex flex-col'>
                <Text type='disabled'>Open Tickets</Text>
                <span className='text-primary fs-28'>80</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="" variant="borderless">
            <div className='flex gap-3 items-center'>
              <div className='card-icon bg-warning-light text-warning'><FileTextOutlined /></div>
              <div className='flex flex-col'>
                <Text type='secondary'>Pending</Text>
                <span className='text-warning fs-28'>5</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="" variant="borderless">
            <div className='flex gap-3 items-center'>
              <div className='card-icon bg-success-light text-success'><FileTextOutlined /></div>
              <div className='flex flex-col'>
                <Text type='secondary'>Resolved</Text>
                <span className='text-success fs-28'>5</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="" variant="borderless">
            <div className='flex gap-3 items-center'>
              <div className='card-icon bg-danger-light text-danger'><FileTextOutlined /></div>
              <div className='flex flex-col'>
                <Text type='secondary'>Overdue</Text>
                <span className='text-danger fs-28'>10</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className='mt-10'>
        <Col span={12}>
          <Card className="" variant="borderless">
            <div className='flex gap-3 items-center'>
              <div className='card-icon bg-info-light text-info'><FileTextOutlined /></div>
              <div className='flex flex-col'>
                <Text type='secondary'>Total Tickets</Text>
                <span className='text-info fs-28'>100</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card className="" variant="borderless">
            <div className='flex gap-3 items-center'>
              <div className='card-icon bg-sky-blue-light text-sky-blue'><FileTextOutlined /></div>
              <div className='flex flex-col'>
                <Text type='secondary'>Created Today</Text>
                <span className='text-sky-blue fs-28'>5</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className='mt-10'>
        <Col span={8}>
          <Card className="" title="By Status" variant="borderless">
            <Flex gap="large" vertical>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>In Progress</span>
                  <span>4</span>
                </div>
                <span><Progress percent={30} showInfo={false} /></span>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>In Progress</span>
                  <span>4</span>
                </div>
                <span><Progress percent={30} showInfo={false} /></span>
              </div> <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>In Progress</span>
                  <span>4</span>
                </div>
                <span><Progress percent={30} showInfo={false} /></span>
              </div> <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>In Progress</span>
                  <span>4</span>
                </div>
                <span><Progress percent={30} showInfo={false} /></span>
              </div> <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>In Progress</span>
                  <span>4</span>
                </div>
                <span><Progress percent={30} showInfo={false} /></span>
              </div> <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>In Progress</span>
                  <span>4</span>
                </div>
                <span><Progress percent={30} showInfo={false} /></span>
              </div>
            </Flex>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="" title="By Priority" variant="borderless">
          </Card>
        </Col>
        <Col span={8}>
          <Card className="" title="By Agent" variant="borderless">
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard