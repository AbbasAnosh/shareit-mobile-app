import { SafeAreaProvider } from "react-native-safe-area-context";
import RoootNavigator from "./RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <RoootNavigator />
    </SafeAreaProvider>
  );
}
