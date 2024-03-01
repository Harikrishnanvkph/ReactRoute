import { useNavigate } from "react-router-dom";


function Bin({ index,route, className, src, name, description, imgClass }) {
  const navigate = useNavigate();

  {/* It will navigate to its own route page onclick the div element */}
  const handleClick = ()=>{
    navigate(route);
  }

  return (
    <div key={index} className={`stack ${className} p-2 d-flex flex-column`} 
    onClick={handleClick}>
      <img className={`image ${imgClass} border border-success rounded`} src={src} alt="name" />
      <p className="name font-weight-bold p-2 m-0">{name}</p>
      <p className="description text-justify">{description}</p>
    </div>
  );
}

export default Bin;
