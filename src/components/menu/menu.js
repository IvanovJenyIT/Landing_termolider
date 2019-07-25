import React from "react";
import { Link } from "react-scroll";

import '../../style.css'

const Menu = () => {
    return(
        <div className="container-fluid background-skyblu">
            <div className="container">
                <div className="d-flex flex-row bd-highlight mb-3  menu">

                    <Link
                        activeClass="active"
                        to="utp"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    > Наши преимущества
                    </Link>

                    <Link
                        activeClass="active"
                        to="foyou"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    > Для вас
                    </Link>

                    <Link
                        activeClass="active"
                        to="goods"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    > Наши товары
                    </Link>

                    <Link
                        activeClass="active"
                        to="aboute"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    > Контакты
                    </Link>
            </div>
        </div>
        </div>
    )
}

export default Menu;