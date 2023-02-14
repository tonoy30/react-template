import { Typography } from '@src/components/Typography';
import { YStack } from 'src/components/Stack';

const Sidebar = () => {
	return (
		<YStack
			css={{
				minWidth: '200px',
				width: '25vw',
			}}
			padding={8}
		>
			<YStack padding={[8, 16]} space={16} grow>
				<Typography variant='h7'>Menu 1</Typography>
				<Typography variant='h7'>Menu 1</Typography>
				<Typography variant='h7'>Menu 1</Typography>
			</YStack>
			<YStack padding={[8, 16]}>
				<Typography variant='h7'>footer</Typography>
			</YStack>
		</YStack>
	);
};

export default Sidebar;
