import React , {useState , useRef , useEffect} from 'react'
import "./Accordion.css"

export default function Accordion() {
    
    const [toggle , setToggle] = useState(false);
    const [heightEl , setHeightEl] = useState();
    const chevronBas =  process.env.PUBLIC_URL + `/assets/img/chevron-bas.png` ;
    const chevronHaut =  process.env.PUBLIC_URL + `/assets/img/chevron-up.png` ;
    
    function toggleAccord() {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
       
    }, [])
    
    return (
        <div className="accord">
            <div className="accord-visible" onClick={toggleAccord}>
                <h2>Lorem ipsum dolor sit amet. </h2>
                <img src={  !toggle ? chevronBas : chevronHaut } alt="bas"></img>
            </div>
            <div className={toggle ? "accord-toggle animated" : "accord-toggle"} ref={refHeight} style={{height :  toggle ? `${heightEl}` : '0px' }} >
               <p aria-hidden = {toggle ? "true" : "false"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum, mollitia labore delectus necessitatibus corrupti facilis minima omnis illum! Inventore exercitationem repudiandae quasi, quam maxime doloribus accusantium obcaecati? Modi, earum.</p>
            </div>

            
        </div>
    )
}
