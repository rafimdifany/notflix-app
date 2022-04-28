import { Image } from "react-bootstrap"


const ImageAtom = (props) => {
  return(
    <img src={props.src} className={props.className} width={props.width} height={props.height}/>
  )
}

export default ImageAtom;