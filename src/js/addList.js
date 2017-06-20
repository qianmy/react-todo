/**
 * Created by qianmaoyin on 2017/6/9.
 */
import React from "react";

//用于新增数据
export default class AddList extends React.Component{
    handleAdd(){
        let inputDom = this.refs.inputNew;//获取真实的input元素
        let inputValue = inputDom.value;//获取input的值
        let rows = this.props.todo;//获取父组件传过来的数组
        //将获取到的input的值添加到数组中
        rows.push(inputValue);
        //如果input的值为空值，则进行提示
        if(inputValue == ""){
            inputDom.focus();//获取焦点
            alert("数据不能为空");
            return;
        }
        //将新数组传入回调函数
        this.props.add(rows);
        //清空输入框
        inputDom.value = "";
    }

    render(){

        return(
            <form>
                <input type="text" placeholder="我要做什么" ref="inputNew"/>
                <input type="button" value="提交" onClick={this.handleAdd.bind(this)}/>
            </form>
        )

    }
}