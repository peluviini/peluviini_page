import ReactDOM from "react-dom";
import { useEffect, createContext} from 'react';


type OverlayScreenProps = {
    overlaySetter : Function;
}

export interface IOverlay {
}
export const defaultOverlayValue : IOverlay = {
}
export const useOverlay = createContext(defaultOverlayValue);
 
const OverlayScreen : React.FC<OverlayScreenProps> = (props : OverlayScreenProps) => {
   
    const o : IOverlay = {
    }
 
    useEffect(() => {
        props.overlaySetter(o);
    }, [props.overlaySetter]);
 
   
    const overlayRoot = document.getElementById('overlay');
    if (!overlayRoot) {
        return null;
    }
 
 
    return ReactDOM.createPortal(
        <div id="OverlayScreen"
            style={{zIndex : 20, inset : 0, width : "100%", height : "100%", position : "fixed", overflow : "hidden", pointerEvents : "none"}}
        >
            <div style={{paddingTop : "12vh", paddingLeft : "7vw"}}>
                <p style={{fontSize : 25}}>{":)"}</p>
            </div>
        </div>,
        overlayRoot
    );
};
 
export default OverlayScreen;