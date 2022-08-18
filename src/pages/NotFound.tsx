import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>404 Page not found</h1>
            <button type="button" onClick={handleRedirect}>
                Go back
            </button>
        </div>
    );
}

export default NotFound;
