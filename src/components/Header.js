import Search from "./Search";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between h-20 shadow-lg">
                <div className="w-2/12 flex">
                    <div className="text-center px-4 py-6">
                        <img className="w-10 items-center" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
                    </div>
                    <div>
                        <img className="w-40 items-center" alt="logo" src="https://as1.ftcdn.net/jpg/03/00/38/90/1000_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" />
                    </div>
                </div>
                <div className="w-6/12">
                    <Search />
                </div>
                <div className="w-2/12 p-6">
                    <img className="w-10" alt="user" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" />
                </div>
            </div>
        </header>
    )
}

export default Header;