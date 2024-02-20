import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setuser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userdata) => {
    setuser(userdata);

    localStorage.setItem("user", JSON.stringify(userdata));
  };
  const logout = () => {
    setuser(null);

    localStorage.removeItem("user");
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key == "user") {
        setuser(event.newValue ? JSON.parse(event.newValue) : null);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
