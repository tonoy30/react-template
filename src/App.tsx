import Layout from '@src/components/layout/Layout';
import { XStack } from '@src/components/Stack';

export const App = () => {
	return (
		<Layout>
			{[200, 400, 500, 100, 300, 700, 900].map((width, index) => (
				<XStack
					key={index}
					css={{ height: 100, width }}
					justifyContent='center'
					alignItems='center'
				>
					width: {width}
				</XStack>
			))}
		</Layout>
	);
};
