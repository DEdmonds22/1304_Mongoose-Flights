import React from "react";

function Index({ flights }) {
    const divStyle = {
        textAlign: "center",
        fontFamily: "georgia"
    };

    const h1Style = {
        fontSize: "3rem",
        margin: "3rem 0rem"
    }

    const divAStyle = {
        display: "flex",
        justifyContent: "right",
        margin: "2rem",
    }

    const aStyle = {
        backgroundColor: "#add8f4",
        padding: "1rem",
        color: "white",
        textDecoration: "none",
        fontSize: "1.3rem"
    }

    const liStyle = {
        backgroundColor: "#add8e6",
        listStyleType: "none",
        fontSize: "2rem",
        padding: "4rem",
        margin: "2rem"
    }

    return (
        <div style={divStyle}>
            <h1 style={h1Style}>All Flights</h1>
            <div style={divAStyle}>
                <a href={`/flights/new`} style={aStyle}>Create a New Flight</a></div>
            <ul>
                { flights.map(( flight, i ) => {
                    return (
                        <li key={i} style={liStyle}>
                                Airline: { flight.airline }
                                < br/>
                                Flight #: { flight.flightNo }
                                < br/>
                                Departs: {new Date(flight.departs).toLocaleString()}
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

module.exports = Index;