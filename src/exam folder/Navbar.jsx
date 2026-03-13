import React from "react";
import { Link, Routes, Route} from "react-router-dom";
import DepartmentHome from "./DepartmentHome";
import DepartmentRegistration from "./DepartmentRegistration";
import DepartmentUsers from "./DepartmentUsers";
import DepartmentApiDemo from "./DepartmentApiDemo";


export default function Navbar() {
    return (
        <div>
            <nav className="nav">
                <button><Link to="/department-home">Home</Link></button>
                <button><Link to="/department-registration">Add Registration</Link></button>
                <button><Link to="/department-users">View Users</Link></button>
                <button><Link to="/api">API Demo</Link></button>
            </nav>
            <Routes>
                <Route path="/department-home" element={<DepartmentHome />} />
                <Route path="/department-registration" element={<DepartmentRegistration />} />
                <Route path="/department-users" element={<DepartmentUsers />} />
                <Route path="/api" element={<DepartmentApiDemo />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
            </div>
    );
}