/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
    const auth = useAuth()

    const logout = (e) => {
        e.preventDefault()
        auth.logout()
    }

    return (
        <>

            <h1>Logout</h1>
            <form onSubmit={logout}>
                <label> Seguro que quiere salir</label>
                <button type="submit">Logout</button>
            </form>
        </>
    )
}

export { LogoutPage }  