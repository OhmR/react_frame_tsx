import React from 'react';
import MainLayout from "../../components/Layout";
import "antd/dist/antd.css"
import {Breadcrumb} from 'antd'

export default ()=>{
    return (
        <MainLayout>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Option1</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                this is Option1
            </div>
        </MainLayout>
    )
}
