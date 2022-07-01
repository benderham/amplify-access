import type { ReactNode } from 'react';

type PageLayoutProps = {
	children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
	return <main>{children}</main>;
};
