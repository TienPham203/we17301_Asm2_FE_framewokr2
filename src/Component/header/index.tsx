
import Cart from './cart'
import Lienhe from './lienhe'
import Logo from './logo'
import Menu from './menu'
import Slide from './slide'
import User from './user'



const Header = () => {
    return (
        <div className="header header-bg">
            <div className="flex items-center justify-around nav  p-4">
                <Logo></Logo>
                <Menu />
                <div className="flex items-center p-4 text-xl ">
                    <Lienhe />
                    <User />
                    <Cart />
                </div>
            </div>
            <div className="slider"><Slide /></div>
        </div>
    )
}

export default Header