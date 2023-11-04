import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
	StatusBar,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

// check if running on android
const isAndroid = Platform.OS === 'android';

export default function App() {
	return (
		<>
			{/* adjust for android status bar height */}
			<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
				<View style={{ padding: 16, backgroundColor: 'green' }}>
					<Text>Search</Text>
				</View>
				<View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({});
