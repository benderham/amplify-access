import { gql } from '@apollo/client';

export const GET_VENUE_LIST = gql`
	query GetAllVenuesQuery {
		venues {
			id
			name
			address
		}
	}
`;
