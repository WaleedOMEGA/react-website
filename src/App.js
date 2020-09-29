import React, { Component } from 'react';

import PageWrapper from './components/pageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './components/pages/Contact';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Admin/Dashboard';
import { connect } from 'react-redux';
import Users from './components/pages/Admin/Users';
import Posts from './components/pages/Admin/Posts';
class App extends Component {
	render() {
		return (
			<Router>
				<Route
					exact={true}
					path="/admin/users"
					render={(props) => {
						return (
							<div>
								{this.props.auth.token ? (
									<AdminWrapper>
										<Users />
									</AdminWrapper>
								) : (
									<LoginWrapper>
										<Login />
									</LoginWrapper>
								)}
							</div>
						);
					}}
				/>
				<Route
					exact={true}
					path="/admin/posts"
					render={(props) => {
						return (
							<div>
								{this.props.auth.token ? (
									<AdminWrapper>
										<Posts />
									</AdminWrapper>
								) : (
									<LoginWrapper>
										<Login />
									</LoginWrapper>
								)}
							</div>
						);
					}}
				/>
				<Route
					exact={true}
					path="/admin"
					render={(props) => {
						return (
							<div>
								{this.props.auth.token ? (
									<AdminWrapper>
										<Dashboard />
									</AdminWrapper>
								) : (
									<LoginWrapper>
										<Login />
									</LoginWrapper>
								)}
							</div>
						);
					}}
				/>

				<Route
					exact={true}
					path="/"
					render={(props) => (
						<PageWrapper>
							<Home {...props} />
						</PageWrapper>
					)}
				/>
				<Route
					path="/about"
					component={(props) => (
						<PageWrapper>
							<About {...props} />
						</PageWrapper>
					)}
				/>
				<Route
					path="/contact"
					component={(props) => (
						<PageWrapper>
							<Contact {...props} />
						</PageWrapper>
					)}
				/>
			</Router>
		);
	}
}
const mapStateToProps = state => {
	return {
		auth:state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
