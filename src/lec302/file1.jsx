import * as React from "react";
export const UserContext = React.createContext();
function FetchUser() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve({name: "Rku Student", id: "1"});
        }, 10000);
    });
}

export function UserProvider({ children }) {
    const [user, setUser] = React.useState({
        id: "Loading...",
        name: "Loading...",
    });
    React.useEffect(() => {
        FetchUser().then((data) => setUser(data));
    }, []);
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
}