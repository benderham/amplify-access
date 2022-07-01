import type { Venue } from '../../../types';

type Props = {
	venues: Venue[];
};

export const VenueList = ({ venues }: Props) => {
	return (
		<>
			<h2>Venues</h2>
			<ul>
				{venues.map((venue) => (
					<li key={venue.id}>
						{venue.name} - {venue.address}
					</li>
				))}
			</ul>
		</>
	);
};
