import React, { Component } from 'react';
import TodoList from './TodoList';

class BodyContainer extends Component {
	render() {
		return (
			<header>
				<h1>List here</h1>
              <TodoList/>
			</header>
		);
	}
}

export default BodyContainer;