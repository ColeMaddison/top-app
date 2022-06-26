import React, { useEffect, useState } from "react";
import { Button, Rating } from "../components";
import { Htag } from "../components/Htag/Htag";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";

 function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);

	useEffect(() => {
		console.log(`counter: ${counter}`);
		return function __() {
			console.log('unmounted');
		};
	}, [counter]);
	
	return (
		<>
			<Htag tag='h1' >{counter}</Htag>
			<Button appearance='primary' arrow='right' onClick={() => setCounter(x => x+1)}>hasas</Button>
			<Button appearance='ghost' arrow='down'>hasas</Button>
			<P size='l'>sdfsdfd</P>
			<P>sdfsdfd</P>
			<P size='s'>sdfsdfd</P>
			<Tag color="ghost" size="m">text</Tag>
			<Tag color="red" size="s">text</Tag>
			<Tag color="green" size="m">text</Tag>
			<Tag color="primary" size="s">text</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
		</>
	);
}

export default withLayout(Home);
