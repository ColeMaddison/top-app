import React from "react";
import { Button } from "../components";
import { Htag } from "../components/Htag/Htag";
import { P } from "../components/P/P";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1' >Текст</Htag>
			<Button appearance='primary' arrow='right'>hasas</Button>
			<Button appearance='ghost' arrow='down'>hasas</Button>
			<P size='l'>sdfsdfd</P>
			<P>sdfsdfd</P>
			<P size='s'>sdfsdfd</P>
		</>
	);
}
