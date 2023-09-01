import "../index.css"
function Card(props) {
    return (
        <div id="card">
            <img src = {props.img} alt="Product" />
            <div id="any">
            <h2>Title: {props.title}</h2>
            <h3>Category: {props.category}</h3>
            <p>{props.desc}</p>
            <h4>Price: {props.price} {"$"}</h4>
            </div>
        </div>
    )
}

export default Card