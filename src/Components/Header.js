import React , { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
	constructor(props) {
	  super(props);
	  this.count = 0;		
	}
	static propTypes = {
	  acceptMessage: PropTypes.func
	}
	pushMessage(message){
	   this.props.acceptMessage(message + ' ' +this.count++);		
	}

	componentDidMount(){
		console.log('组件挂载完成');
	}
	render(){
		return(
			<header>
				<p>子父组件通信</p>
				<button onClick={this.pushMessage.bind(this,'子组件信息')}>发送消息至父集组件</button>
				<h1>Header Component</h1>	
			</header>
		);
	}
}