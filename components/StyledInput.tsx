import { TextInput, type TextInputProps } from "react-native";

export function SignupTextInput({
  value,
  onChangeText,
  placeholder,
}: TextInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#FFF"
      className={`h-12 w-4/5 justify-center rounded-xl border-2 border-white bg-black pl-4 text-white`}
      style={{ fontFamily: value ? "Poppins-Regular" : "Poppins-Italic" }}
    ></TextInput>
  );
}

export function SignupAgeInput({
  value,
  onChangeText,
  placeholder,
}: TextInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#FFF"
      className={`h-12 w-1/5 justify-center rounded-xl border-2 border-white bg-black pl-4 text-white`}
      style={{ fontFamily: value ? "Poppins-Regular" : "Poppins-Italic" }}
    ></TextInput>
  );
}
