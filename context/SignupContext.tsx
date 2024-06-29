import React, { ReactNode, createContext, useState } from "react";

interface SignupData {
  firstName: string;
  lastName: string;
  userName: string;
  bio: string;
  dateOfBirth: Date;
}

interface SignupContextProps {
  signupData: SignupData;
  updateSignupData: (newData: Partial<SignupData>) => void;
}

const defaultSignupData: SignupData = {
  firstName: "",
  lastName: "",
  userName: "",
  bio: "",
  dateOfBirth: new Date(),
};

export const SignupContext = createContext<SignupContextProps>({
  signupData: defaultSignupData,
  updateSignupData: () => {},
});

interface SignupProviderProps {
  children: ReactNode;
}

export const SignupProvider: React.FC<SignupProviderProps> = ({ children }) => {
  const [signupData, setSignupData] = useState<SignupData>(defaultSignupData);

  const updateSignupData = (newData: Partial<SignupData>) => {
    setSignupData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};
