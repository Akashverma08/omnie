function Car({color="black",name,...rest}){

   
    return(

        <div>
            <h2>I love my {name} {...rest.version} which is {color}</h2>
            </div>
    )
}

export default Car;