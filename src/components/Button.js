//color  adds  style  tothe btn, text allows to change btn text,and onClick adds event//
const Button=({color,text , onClick})=>{
   
    return  <button onClick={onClick}  style ={{backgroundColor :color}} className="btn">{text}</button>
}
export default Button