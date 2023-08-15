// eslint-disable-next-line no-unused-vars
import { HashRouter, Routes, Route } from "react-router-dom"
import { Menu } from './Menu'
import { HomePage } from './HomePage'
import { BlogPage } from './BlogPage'
import { BlogPost } from './BlogPost'
import { ProfilePage } from './ProfilePage'
import { AuthProvider } from './auth'
import { LoginPage } from './LoginPage'
import { LogoutPage } from './LogoutPage'

function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogPage />} >
                            <Route path=":slug" element={<BlogPost />} />
                        </Route>
                        < Route path="/login" element={<LoginPage />} />
                        < Route path="/logout" element={<LogoutPage />} />
                        < Route path="/profile" element={<ProfilePage />} />
                        < Route path="*" element={<p>Not found</p>} />
                    </Routes>
                </AuthProvider>
            </HashRouter >

        </>
    )
}

export default App
