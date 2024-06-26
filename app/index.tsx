import { Link } from "expo-router";

import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView } from "@/components/StyledView";

export default function App() {
  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText color="pink">In index</StyledText>
        <Link href="/Signin" className="font-poppins text-white">
          Sign in
        </Link>
        <Link href="/signup/Name" className="font-poppins text-white">
          Name
        </Link>
      </CenterView>
    </SafeAreaView>
  );
}
