import React, { Component } from 'react';
import Header from '../Common/Header';
import image  from '../assets/img/header-bg.jpg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';
class About extends Component{
    render() {
		return (
			<div>
				<Header
					title="About Us"
					subtitle="It's Realy a great story"
					showButton={false}
					image={image}
				/>
				<Timeline />
				<Team />
			</div>
		);
    }
}

export default About;