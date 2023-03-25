
import "../styles/Nav.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { FcCameraIdentification } from "react-icons/fc";

const Nav = () => {
    const location = "Cairo, Egypt";
    
  return (
    <section className="navbar">
        <div className="progress"></div>

        <div className='leftBar'>
           <div className="logo">
            <FcCameraIdentification/>
           </div>
            <p className="mapty">Mapty</p>
        </div>

        <div className='midBar'>
            <input className="input" type="text" placeholder='Search...' />
            <div className="pin">
                /
            </div>
        </div>

        <div className='rightBar'>
                <div className="pin2">
                    <AiFillInfoCircle/>
                </div>
                {`Location: ${location}`}
        </div>

    </section>
  )
}

export default Nav