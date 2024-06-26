import { GoogleSignInButton } from "@/components/StyledButton";
import { StyledText } from "@/components/StyledText";
import { CenterView, SafeAreaView, SpacerView } from "@/components/StyledView";

export default function Signin() {
  return (
    <SafeAreaView>
      <CenterView backgroundColor="black">
        <StyledText type="title" color="pink">
          Welcome to {"\n"} Cheeco!
        </StyledText>
        <SpacerView type="vertical" size={32}></SpacerView>
        <GoogleSignInButton></GoogleSignInButton>
      </CenterView>
    </SafeAreaView>
  );
}
