import type { NextPage, GetServerSideProps } from 'next';
import type { Venue, VenueListData } from '../types';
import Head from 'next/head';
import { GET_VENUE_LIST } from '../graphql/queries';
import { initializeApollo } from '../lib/apollo';
import { PageLayout } from '../components/common/PageLayout';
import { VenueList } from '../components/venues/VenueList';

type Props = {
	venues: Venue[];
};

const Home: NextPage<Props> = ({ venues }) => {
	return (
		<>
			<Head>
				<title>Amplify Access 🎸♿️</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<PageLayout>
				<VenueList venues={venues} />
			</PageLayout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const client = initializeApollo();

	const { data } = await client.query<VenueListData>({
		query: GET_VENUE_LIST,
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
};

export default Home;
