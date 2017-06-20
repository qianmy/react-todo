/**
 * Created by qianmaoyin on 2017/6/9.
 */
import React from "react";
import ReactDOM from "react-dom";

import { render } from 'react-dom';
import { Router, Route, Link} from 'react-router';


import AddList from "./addList.js";
import OperateList from "./operateList.js";


//总组件
class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            todoList : []
        }
    }

    handleChange(rows){
        this.setState({
            todoList : rows
        })
    }

    render(){

        return(
            <div>
                {/*展示、查看数据主要是考虑一个将数据存在哪的，而react的思想是建议将数据存储在父组件的state中，通过props传给子组件。*/}
                <AddList todo={this.state.todoList} add={this.handleChange.bind(this)}/>   {/*通过输入框组件的事件来改变数值然后再通过回调来改变state。*/}
                <OperateList todo={this.state.todoList} change={this.handleChange.bind(this)}/>
            </div>

        )
    }
}



ReactDOM.render(
    <Main/>,
    document.getElementById("todo")
)

