import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GET_ALL_VENUES_QUERY } from '../graphql/query';
import { initializeApollo } from '../lib/apollo';
import { PageLayout } from '../components/common';
import styles from '../styles/Home.module.css';

type Venue = {
	id: string;
	name: string;
};

type Props = {
	venues: Venue[];
};

const Home: NextPage<Props> = ({ venues }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<PageLayout />
				<h2>Venues</h2>
				<ul>
					{venues.map((venue) => (
						<li key={venue.id}>{venue.name}</li>
					))}
				</ul>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export async function getServerSideProps() {
	const client = initializeApollo();

	const { data } = await client.query({
		query: GET_ALL_VENUES_QUERY,
	});
	const venues = data?.venues;

	if (!data || !venues) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			venues,
		},
	};
}

export default Home;
