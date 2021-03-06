import * as React from 'react';
import Layout from './layout2';
import {
	Menu, 
	Navbar,
	Container,
	Columns,
	Card,
	Heading,
	Hero,
	Section,
	Button
} from 'react-bulma-components';

interface props {
	player: any;
	appid: number;
	responses: Array<string[]>;
	charname: string;
	charstory: string;
	nochar: boolean;
}

export default (props: props) => {
	let application: JSX.Element[] = [];

	if (props.responses.length !== 0 && props.responses.length !== undefined) {
		console.log("props resposne length is not 0")
		props.responses.map((response: string[], i: any) => {
			if (response[0] !== null) {
				application.push(
					<Section style={{ padding: "1.5rem 1.5rem"}} key={i}>
						<div className="field">
							<label className="label">{response[0]}</label>
							<div className="control">
								<textarea className="textarea" placeholder="Your answer here..." value={response[1]}></textarea>
							</div>
						</div>
					</Section>
				)
			}
		});
	}

	console.log(application.length);

	return (
		<Layout title="Onset Roleplay - Character Application">
			<Navbar active>
				<Navbar.Brand>
					{/* 
					// @ts-ignore */}
					<Navbar.Item renderAs="a" href="/">
						Onset Roleplay
					</Navbar.Item>
					<Navbar.Burger />
				</Navbar.Brand>
				<Navbar.Menu >
					<Navbar.Container position="end">
						<Navbar.Item dropdown hoverable>
							<Navbar.Link className="displayname">
								{props.player.steamname}
							</Navbar.Link>
							<Navbar.Dropdown>
								<Navbar.Item>
									View Characters
								</Navbar.Item>
							</Navbar.Dropdown>
						</Navbar.Item>
						{/*
						// @ts-ignore */}
						<Navbar.Item renderAs="a" href="/logout">
							Logout
						</Navbar.Item>
					</Navbar.Container>
				</Navbar.Menu>
			</Navbar>

			<section className="hero is-fullheight-with-navbar">
				<Container>
					<Hero size="fullheight">
						<Hero.Body>

							<Card>
								<Card.Content>
									<Section style={{ padding: "1.5rem 1.5rem"}}>
										<Heading>Character Application</Heading>

										<p>
											Is this your first time writing a character application? Please familiarise yourself with the server rules <a href="">here</a><br></br>
											Otherwise, please answer all the following questions to the best of your ability.
											Your application will be reviewed by an administrator and the status of your application can be found on this page.<br></br>
											You should aim to write a minimum of two paragraphs per long answer question.
										</p>
									</Section>

									<Section style={{ padding: "1.5rem 1.5rem"}}>
										<div className="field">
											<label className="label">Character Name</label>
											<div className="control">
												<input className="input" type="text" placeholder="Firstname_Lastname" value={props.charname} />
											</div>
										</div>
									</Section>

									<Section style={{ padding: "1.5rem 1.5rem"}}>
										<div className="field">
											<label className="label">Character Story</label>
											<div className="control">
												<textarea className="textarea" placeholder="Your character story here..." value={props.charstory}></textarea>
											</div>
										</div>
									</Section>

									{application.length !== 5 ? null : (application)}

									<Section style={{ padding: "1.5rem 1.5rem"}}>
										<div className="field is-grouped">
											<div className="control">
												<button className="button is-primary" id="submit">Submit</button>
											</div>
											<div className="control">
												<Button color="info" id="save">Save</Button>
											</div>
										</div>
									</Section>
									
								</Card.Content>
							</Card>

						</Hero.Body>
					</Hero>
				</Container>
			</section>

			<script src="/js/application.js"></script>
		</Layout>
		
	)
}