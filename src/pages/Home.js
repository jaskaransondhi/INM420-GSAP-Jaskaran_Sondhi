import './../css/home.css';
import logo from './../images/logo.svg'

export default function Home() {
	return (
		<div className="App App-header home">
			<img src={ logo } alt="rotating-logo" className="home-logo"></img>
			<h1> &#128075; Hello! Welcome to my portfolio</h1>
			<p>I created this single page application using React Router</p>
			<p>Feel free to have a look around. Enjoy &#128512;</p>
		</div>
	)
}