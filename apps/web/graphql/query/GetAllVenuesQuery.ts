import { gql } from '@apollo/client';

export const GET_ALL_VENUES_QUERY = gql`
	query GetAllVenuesQuery {
		venues {
			id
			name
		}
	}
`;
