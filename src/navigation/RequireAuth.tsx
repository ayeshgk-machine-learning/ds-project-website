import { Navigate,useLocation } from "react-router-dom"

export const RequireAuth = ({children}) => {
    const location = useLocation(); 
    let auth = sessionStorage.getItem('AuthToken') 
    console.log("auth: " ,auth)

    return (
        <div>
            {auth ? children : <Navigate to="/login" state={{from:location.pathname}}/>}
        </div>
    )
}