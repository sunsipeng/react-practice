import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	title: 'this is react practice'
	  };
	}
	static propTypes = {
	  name: PropTypes.string
	}
	static defaultProps = {
	  name: 'defule Name'
	}
	hadleChange(e){
		const text = e.target.value;
		this.setState({
			title: text
		});
	}
	acceptMessage(messgae){
		console.log('子组件发来的消息',messgae);
	}

	componentDidMount(){
		console.log(this.props);
	}
	render(){
		return(
			<div>
				<Header acceptMessage={this.acceptMessage}/>
				<input type='text' onChange={this.hadleChange.bind(this)} />
				<span style={{color:'green'}}>{this.props.name}</span> 首页组件123
				<p style={{color:'red'}}>{this.state.title}</p>
				
				<h2>路由</h2>	
				<div>
					{this.props.children}
				</div>
				<NavLink to="/about"><button>点击跳转(About)</button></NavLink>
				<NavLink to="/login"><button>点击跳转(Login)</button></NavLink>
				<Footer />
			</div>
		);
	}
}

export default Home;