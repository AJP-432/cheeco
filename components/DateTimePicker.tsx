import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import React, { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

interface SignupDateTimePickerProps {
  onDateChange: (date: Date) => void;
}

export function SignupDateTimePicker({
  onDateChange,
}: SignupDateTimePickerProps) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios"); // Show picker on iOS until confirmed
      setDate(currentDate);
      onDateChange(currentDate); // Call the callback function to update the context
    }
    if (Platform.OS !== "ios") {
      setShow(false);
    }
  };

  return (
    <View className="w-2/5">
      <Pressable
        onPress={() => setShow(true)}
        className="h-12 items-center justify-center rounded-xl border-2 border-white bg-black pl-4"
      >
        <Text className="font-poppins text-white">
          {format(date, "MM/dd/yyyy")}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChange}
          onTouchCancel={() => setShow(false)}
        />
      )}
    </View>
  );
}
