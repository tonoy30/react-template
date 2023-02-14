import { XStack } from '@src/components/Stack';

const Header = () => {
	return (
		<XStack
			css={{
				height: 100,
			}}
			justifyContent='space-between'
			padding={20}
		>
			<XStack css={{ width: '25%' }}>Box 1</XStack>
			<XStack css={{ width: '25%' }}>Box 2</XStack>
			<XStack css={{ width: '25%' }}>Box 3</XStack>
		</XStack>
	);
};

export default Header;
