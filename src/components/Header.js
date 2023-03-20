import React from 'react';
import Button from './Button';
import InputBox from './InputBox';

const Header = (context) =>
	<div>
		<InputBox { ...context }/>
		<Button { ...context }/>
	</div>;

export default Header;
