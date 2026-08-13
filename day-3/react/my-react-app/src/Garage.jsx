import Car from "./Car";

function Garage(props){
    return(

        <div>
            <h3> Only SUVS which have:
                <h4>Models:</h4>
                {props.model.map((mo)=>(<p>{mo}</p>))}
                <h4>Engines:</h4>
                {props.engine.map((e)=>(<p>{e}</p>))}
                <h4>Time:</h4>
                {props.time.map((t)=>(
                    <p>{t}</p>
                ))}
            </h3>
            


        </div>
    )
}

export default Garage;