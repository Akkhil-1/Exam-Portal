import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '@/pages/authentication/SignInPage';
import SignUp from '@/pages/authentication/SignUpPage';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/auth">
                <Route path="signin" element={<SignIn/>} />
                <Route path="signup" element={<SignUp/>} />
            </Route>
              
            </Routes>

        </Router>
    )
}

export default AppRoutes;

