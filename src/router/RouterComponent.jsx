import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';


const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
