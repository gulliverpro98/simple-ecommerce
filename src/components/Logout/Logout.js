import { useDispatch } from "react-redux";

const Logout = () => {

    const dispatch = useDispatch();

    const refreshPage = () => {
        window.location.reload();
    }

    const esci = () => {

        dispatch({
            'type': 'LOGOUT'
        });
        refreshPage();
    }

    return (
        <>
        <button type="button" className="btn btn-warning" onClick={esci}>LOGOUT</button>
        </>
    )
}
export default Logout;