import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'antd'
import AddInfoModal from './Component/AddInfoModal';

/*
* 业务场景：
* 组件嵌套 五层  最底层的组件有一个input输入框 一个添加按钮，
* 要求在最低层 输入框输入内容 点击添加，顶层组件会出现一个列表
* 列表的每项内容 就是每次输入的内容
* */

// 这个就是顶层组件
class ComponentNesting extends Component {
    constructor(props) {
        super(props)
    }
    addData() {
        this.props.showModal({type: 'MODAL_SHOW'})
    }
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            }, {
                title: '操作',
                dataIndex: 'key',
                key: 'x',
                render: (data) => {
                    return(
                        <a data-id={data} onClick={this.props.removeDispatch({type: "REMOVE", idCard: data})}>删除</a>
                    )
                }
            }
        ]
        return (
            <div style={{minHeight: "500px"}}>
                <h3>业务场景：</h3>
                <p>一个添加按钮，点击按钮，出现采集信息弹窗(子组件)；点击弹窗内确定按钮，可添加数据至table</p>
                <br/><br/>
                <Button type="primary" onClick={this.addData.bind(this)}>添加数据</Button>
                <AddInfoModal />
                <br/>
                <Table columns={columns} dataSource={this.props.tableData} size="middle" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tableData: state.tableAddPersonInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showModal: (action) => {
            dispatch(action)
        },
        removeDispatch: (action) => {
            dispatch(action)
        }
    }
}

const ComNesting = connect(mapStateToProps, mapDispatchToProps)(ComponentNesting);

export default ComNesting;
