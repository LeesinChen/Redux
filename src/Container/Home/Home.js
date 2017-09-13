import React, {Component} from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        require('./home.scss');
        return(
            <div>
                <Header>
                    <div className="logo">Redux</div>
                </Header>
                <Content style={{ padding: '50px' }}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    I just want to ask you a question, do you know why the knife has scabbard ?
                </Footer>
            </div>
        )
    }
}