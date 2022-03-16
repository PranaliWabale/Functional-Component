function Card(props) {
    return (

        <div class="card" style={{backgroundColor:'	 #ffffff'}}>
            <img className="imgSize"
                src={props.imgsrc}
                alt="Card demos"
                width="60% "
                height="450"
            />
            <div class="card-body" style={{textAlign:'center',backgroundColor:'#b3d9ff',margin:'10px 550px 10px 0px'}}>
                <h1 class="card-title">{props.title}</h1>
                <h2 class="card-text">{props.sname}</h2>
                <h3 class="card-location">{props.location}</h3>
                <h3 class="card-country">{props.country}</h3>
                <h4 class="card-color">{props.color}</h4>
                <p class="card-type">{props.type}</p>
                <p class="card-category">{props.category}</p>
                <p class="card-family">{props.family}</p>
                <a href={props.link} class="btn btn-primary stretched-link">
                    <button style={{backgroundColor:'#ffe6e6'}}>Watch Now</button>
                </a>
            </div>
            <hr /><br />
        </div>

    );
}

export default Card;