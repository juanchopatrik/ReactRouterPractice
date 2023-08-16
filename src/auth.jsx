/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AdminList = ['Irisval', 'RetaxMaster', 'Admin']
const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const login = ({ username }) => {
        const isAdmin = AdminList.find((admin) => admin === username)
        setUser({ username, isAdmin })
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {

    const auth = React.useContext(AuthContext)
    return auth
}

function AuthRoute(props) {
    const auth = useAuth()
    if (!auth.user) {
        return <Navigate to="/login" />
    }
    return props.children;
}


export {
    AuthProvider,
    AuthRoute,
    useAuth
}