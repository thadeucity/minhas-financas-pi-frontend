import React, { createContext, useContext, useState } from 'react';

interface UserDataProps {
  name: string;
  email: string;
}

interface UserContextData extends UserDataProps {
  updateUserData: (newUserData: Partial<UserDataProps>) => void;
}

const UserContext = createContext({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserDataProps>({
    name: '',
    email: '',
  });

  const updateUserData = (newUserData: Partial<UserDataProps>) => {
    setUserData(prevUserData => ({ ...prevUserData, ...newUserData }));
  };

  return (
    <UserContext.Provider
      value={{
        ...userData,
        updateUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context || Object.keys(context).length === 0) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
