import React, {Component} from 'react';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

export default class AppNavbar extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	render() {
		return (
			<div>
				<Navbar color="transparent" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/">
							Shopping List
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle}/>
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="https://github.com/nnordling" target={"_blank"}>
										GitHub
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}