import React from "react";

function Show({flight}) {
    return (
        <div>
            <h1>Flight Details</h1>
            <h2>Airline Name: {flight.airline}</h2>
            <h2>Flight #: {flight.flightNo}</h2>
            <h2>Depart Time:  {flight.departs.toLocaleString()}</h2>
            {flight.destinations ?
                (<div>
                    <h2>Destination Airport: {flight.destinations.airport}</h2>
                    <h2>Landing Time: {flight.destinations.arrival.toLocaleString()}</h2>
                </div>): 
                (<div>
                    <form>
                        
                    </form>
                </div>)}
        </div>
    )
};

module.exports = Show;