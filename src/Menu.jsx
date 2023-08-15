/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <ul>
                {
                    routes.map(route => (
                        <li>
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue',
                                })}
                                to={route.to}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

const routes = []

routes.push({
    to: '/',
    text: 'Home'
})

routes.push({
    to: '/blog',
    text: 'Blog'
})

routes.push({
    to: '/profile',
    text: 'Profile'
})

routes.push({
    to: '/login',
    text: 'Login'
})

routes.push({
    to: '/logout',
    text: 'Logout'
})

export { Menu }
