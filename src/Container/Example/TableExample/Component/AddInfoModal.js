import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Input, Alert } from 'antd';
const FormItem = Form.Item;

// action creator  引入创建action的函数；
import actionCreator from '../action/actionCreator';

class ComponentOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errInfo: false, // 错误信息提示 是否显示  这个本组件是通过state控制，亦可通过redux管理
        }
    }

    // modal弹出框点击确定 的回调函数
    clickOk(e) {
        e.preventDefault();
        // 点击确定，第一步 我们需要 拿到 姓名 性别 年龄
        // 第二步 根据拿到的值，我们需要创建action
        // 第三步 我们需要dispatch(action)
        // 以上三步是在 此组件内完成
        // 接下来 第四步 Reducer 会接收action, 根据action.type来执行相应的操作，
        // 第五步 得到新的 State。更新object tree

        // 首先 校验必填项是否必填
        // this.props.form.validateFieldsAndScroll()  此方法是 antd Form.create()之后的方法 具体用法移步antd官方API
        this.props.form.validateFieldsAndScroll((err, data) => {
            if (!err) { // 第一步拿到用户输入的信息 ==> data 非err即各项都不为空
                // 增加判断 是否已经有重复的人员信息
                const personInfoData = this.props.tableData;
                let repeat = false;
                for (let i = 0; i < personInfoData.length; i++) {
                    if (data.idCard == personInfoData[i].key || data.name == personInfoData[i].name) {
                        // 有重复
                        repeat = true
                    }
                }
                if (!repeat) {
                    // 第二步 创建action
                    const action = actionCreator(data.name, data.sex, data.age, data.idCard);
                    // 第三步 dispatch action
                    this.props.addPerson(action);
                    this.props.handleCancel({type: 'MODAL_HIDE'});
                } else {
                    this.setState({
                        errInfo: true
                    });
                    setTimeout(() => {
                        this.setState({
                            errInfo: false
                        })
                    }, 1800)
                }
            }
        });
    }

    // 点击取消 或者蒙层的回调函数
    clickCancel() {
        // dispatch action  发送action
        this.props.handleCancel({type: 'MODAL_HIDE'});
    }

    render() {
        // 设置 input 和label的宽
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        return (
            <div>
                <Modal title="信息收集表" visible={this.props.visible} onOk={this.clickOk.bind(this)} onCancel={this.clickCancel.bind(this)}>
                    <Form>
                        <FormItem {...formItemLayout} label="姓名">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请填写姓名！' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="性别">
                            {getFieldDecorator('sex', {
                                rules: [{required: true, message: '请填写性别！',}],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="年龄">
                            {getFieldDecorator('age', {
                                rules: [{ required: true, message: '请填写年龄！' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="身份证号码">
                            {getFieldDecorator('idCard', {
                                rules: [{ required: true, message: '请填写身份证号码！' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                    {this.state.errInfo &&
                        <Alert type="error" message="请不要添加重复人员！" banner />
                    }
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        visible: state.tableModalVisible.visible,
        tableData: state.tableAddPersonInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleCancel: (action) => {
            dispatch(action)
        },
        addPerson: (action) => {
            dispatch(action)
        }
    }
}

const ComOne = connect(mapStateToProps, mapDispatchToProps)(Form.create()(ComponentOne));

export default ComOne;
