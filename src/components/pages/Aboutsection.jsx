import { useEffect } from "react"
import Contents from "../layout/anotherpages/Contents"
import Copyright from "../layout/Copyright"


function Aboutsection() {

    useEffect
    return (
        <div
            id="aboutpages"
            className=" h-screen w-screen pt-12 bg-slate-950  " >
            <Contents />
            <Copyright />
            
        </div>
    )
}

export default Aboutsection