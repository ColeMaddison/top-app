import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Button, Rating } from "../components";
import { Htag } from "../components/Htag/Htag";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

 function Home({ menu }: HomeProps): JSX.Element {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN!}/api/top-page/find`, { firstCategory });

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
