/**
 * Created by qianmaoyin on 2017/6/13.
 */
import React from "react";

//用于展示、删除、修改数据
//修改的实现：子组件中设置state用于记录是否按了修改按钮，如果按了修改按钮就将该处的list变成type框重新渲染，在type框进行修改后，点击确认按钮则发生事件然后回调给父组件更新事件。
export default class OperateList extends React.Component{

    //子组件state用于记录修改状态
    constructor(){
        super();
        this.state={
            //changenum记录是哪一个list要修改,changevalue记录要修改的list的值
            changeNum:-1,
            changeValue:""
        }
    }
    //删除功能
    handleDel(e){
        let rows = this.props.todo;
        //获取index
        let index = e.target.getAttribute("data-index");
        //根据index删除数据
        rows.splice(index,1);
        //回调给父组件改变state
        this.props.change(rows);

        // //防止修改后按删除按钮产生bug
        // this.setState({
        //     changeNum:-1
        // })

    }

    //点击修改按钮后改变state
    handleChange(e){
        let index = e.target.getAttribute("data-index");
        let msg = this.props.todo[index];
        this.setState({
            changeNum : index,
            changeValue : msg
        })
    }

    //设置value值
    handleText(e){
        this.setState({
            changeValue : e.target.value
        })
    }

    //获取修改后数据（与增加数据同理）
    handleSave(){
        let inputDom = this.refs.inputNew;
        let inputValue = inputDom.value;
        var rows = this.props.todo;
        if(inputValue == ""){
            alert("数据不能为空");
            return;
        }
        let index = this.state.changeNum;
        rows[index] = inputValue;
        //回调
        this.props.change(rows);
        //改变当前state回到展示状态
        this.setState({
            changeNum:-1
        })
    }

    render(){
        let item = this.props.todo.map((d,i) =>{
            //如果点击修改则将此处渲染成type框
            if(this.state.changeNum == i){
                return(
                    <li key={i}>
                        <input ref='inputNew' type="text" value={this.state.changeValue} onChange={this.handleText.bind(this)}/>
                        <button onClick={this.handleSave.bind(this)}>确定</button>
                    </li>
                )
            }else{
                return(
                    <li key={i}>
                        {d}
                        <button data-index={i} onClick={this.handleDel.bind(this)}>删除</button>
                        <button data-index={i} onClick={this.handleChange.bind(this)}>修改</button>
                    </li>
                )
            }

        })
        return(
            <ul>
                {item}
            </ul>
        )
    }
}