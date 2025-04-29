import "../assets/css/Restaurantunit.css";

const Restaurantunit = (props)=>{
    // console.log(props.RestApiData); 
    // console.log(props.RestApi[0].info.name);
    const {name,cuisines, cloudinaryImageId, locality, costForTwo, avgRating, sla} = props.RestApiData.info;
    // console.log(RestApi);
    return(
        <>
        <div className="restUnit">
            <div className="restUnitinside">
                <div className="restunitImage">

                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
                </div>
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <p>{sla.slaString}</p>
                </div>

                <div>
                    <p>{avgRating}</p>
                </div>
                <div>
                    <p>{costForTwo}</p>
                </div>
                <div>
                    <p>{locality}</p>
                </div>
                <div>
                    <p>{cuisines.join(",")}</p>
                </div>
                <div>
                    <p>Delivery - </p>
                </div>

            </div>

</div>
        </>
    )
}

export default Restaurantunit;