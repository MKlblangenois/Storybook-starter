import React from 'react'
import styled from 'styled-components'

const WelcomeMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	heigth: 100vh;
	text-align: center;
	font-family: 'Source Serif Pro', 'Verdana', sans-serif;

	& span { margin: 0 .5rem }
`

export default { title: 'Welcome' }

export const Welcome = () => (
	<WelcomeMessage>
		<h1>
			<span role={'img'} aria-label="Fire">🔥</span>
				Congratulations, you're ready to change the world !
			<span role={'img'} aria-label="Rocket">🚀</span>
		</h1>
	</WelcomeMessage>
);