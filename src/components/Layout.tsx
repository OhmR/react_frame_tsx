import React, {useState} from 'react'
import {Layout, Breadcrumb} from 'antd'
import SideBar from './SideBar'


const {Header, Content, Footer, Sider} = Layout

function MainLayout(props: {
  children?: React.ReactNode[] | React.ReactNode | React.ReactChild;
}) {
    const [collapse, setCollapse] = useState(false);
    return (
        <Layout style={{minHeight:'100vh'}} hasSider>
            <SideBar collapse={collapse} onCollapse={()=>setCollapse(e=>!e)}/>            
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Test for react antd and react hooks</Footer>
            </Layout>
        </Layout>
    )
}

export default MainLayout;