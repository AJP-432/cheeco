import { Link } from "expo-router";

import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView } from "@/components/StyledView";

export default function App() {
  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText color="pink">In index</StyledText>
        <Link href="/signup/Signin" className="font-poppins text-white">
          Sign in
        </Link>
        <Link href="/signup/Username" className="font-poppins text-white">
          Name
        </Link>
        <Link href="/Feed" className="font-poppins text-white">
          Home
        </Link>
      </CenterView>
    </SafeAreaView>
  );
}
