import "../assets/css/body.css";
import Restaurantunit from "./RestaurantUnit";
import {RestApi} from "./RestApi";

const Body = ()=>{
  
    return(
        <>
            <div className="separator">
            </div>

            <div className="bodyWrap">
                <div className="bodyRow1">
                    <div className="bodyRow1inside">
                        <div className="bodyRow1Heading">
                            <p>What's on your mind?</p>
                        </div>
                        <div>

                            <div className="bodyRow1Unit">
                            {/* <Restaurantunit RestApi={RestApi} />
                            <Restaurantunit RestApi={RestApi} />
                            <Restaurantunit RestApi={RestApi} /> */}

                            </div>


                        </div>

                    </div>
                    
                </div>
                <div className="separator">
                </div>
                <div className="bodyRow2">
                    <div className="bodyRow2inside">
                        <div className="bodyRow2Heading">
                            <p>Top restaurant chains in Delhi</p>
                        </div>
                        <div>

                            <div className="bodyRow2Unit">
                            {/* <Restaurantunit resName="NAME 1" cuisine="1 2 3 "/>
                            <Restaurantunit resName="NAME 1" cuisine="1 2 3 "/>
                            <Restaurantunit resName="NAME 1" cuisine="1 2 3 "/> */}

                            </div>


                        </div>

                    </div>
                    
                </div>
                <div className="separator">
                </div>
                <div>
                    <input type="search"/>
                </div>
                <div className="separator">
                </div>
                <div className="bodyRow3">
                    <div className="bodyRow3inside">
                        <div className="bodyRow3Heading">
                            <p>Restaurants with online food delivery in Delhi</p>
                        </div>
                        
                        <div className="bodyRow3Filters">
                            <div>
                                <p>Filter 1</p>
                            </div>

                        </div>
                        <div className="separator">
                </div>
                        <div>

                            <div className="bodyRow3Unit">
                                {
                                    RestApi.map((key,index)=>{
                                        return <Restaurantunit RestApiData={key} key={index}/>
                                    })
                                }
                            {/* <Restaurantunit resName="NAME 1" cuisine="1 2 3 "/> */}
                            {/* <Restaurantunit resName="NAME 1" cuisine="1 2 3 "/> */}
                            {/* <Restaurantunit resName="NAME 1" cuisine="1 2 3 "/> */}

                            </div>


                        </div>

                    </div>
                    
                </div>


            </div>
        </>
    )
}
export default Body;
               