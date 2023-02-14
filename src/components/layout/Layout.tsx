import Header from '@src/components/layout/Header';
import Sidebar from '@src/components/layout/Sidebar';
import { XStack, YStack } from '@src/components/Stack';

const Layout = ({ children }: React.PropsWithChildren<any>) => {
	return (
		<XStack
			css={{
				minHeight: '100vh',
			}}
			padding={8}
			space={16}
			DEV_outline
		>
			<Sidebar />
			<YStack grow space={32}>
				<Header />
				<YStack space={32} alignItems='center'>
					{children}
				</YStack>
			</YStack>
		</XStack>
	);
};

export default Layout;
