
import { Outlet } from 'react-router-dom'

const Dashbroad = () => {


    return (
        <div>
            <p>Header</p>
            <Outlet />
            <p>Footer</p>

        </div>
    )
}

export default Dashbroad