import React from "react";

const New = () => {
    const outterDiv = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        gap: "20px",
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "georgia"
    }

    const h1Style = {
        fontSize: "3rem",
        margin: "3rem 0rem"
    }

    const divStyle = {
        width: '80%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
    }

    const formStyle = {
        backgroundColor: 'blue',
        padding: "10rem",
        fontSize: "2rem",
        padding: "4rem",
        margin: "2rem"
    }

    const submitStyle = {
        backgroundColor: "#add8f4",
        padding: "1rem",
        margin: "1rem 0rem 0rem",
        color: "white",
        textDecoration: "none",
        fontSize: ".8rem"
    }

    const aStyle = {
        backgroundColor: "#add8f4",
        padding: "1rem",
        color: "white",
        textDecoration: "none",
        fontSize: "1.3rem"
    }
    return (
        <div style={outterDiv}>
            <h1 style={h1Style}>Enter a Flight</h1>
            <div style={divStyle}>
                <form action='/flights' method='POST' style={formStyle}>
                    Airline: <input type='text' name='airline' />
                    < br />
                    Flight #: <input type='text' name='flightNo' />
                    < br />
                    Departs: <input type='datetime-local' name='departs' />
                    < br />
                    <label for="airport">Destination: </label>
                    <select name='airport'>
                        <option value='AUS' >AUS</option>
                        <option value='DAL' >DAL</option>
                        <option value='LAX' >LAX</option>
                        <option value='SAN' >SAN</option>
                        <option value='SEA' >SEA</option>
                    </select>
                    <br />
                    <input type='submit' name='' value='Add your Flight!' style={submitStyle} />
                </form>
            </div>
            <a href="/flights" style={aStyle} >back</a>
        </div>
    );
};

module.exports = New;