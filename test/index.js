import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        // table that takes input from user and displays the result
        <div className="container">

            <div className="row">
                <div className="col-md-12">
                    <h1>React Calculator</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Number</th>
                                <th>Second Number</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" id="firstNumber" /></td>
                                <td><input type="text" id="secondNumber" /></td>
                                <td><input type="text" id="result" disabled /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={add}>Add</button>
                    <button className="btn btn-primary" onClick={subtract}>Subtract</button>
                    <button className="btn btn-primary" onClick={multiply}>Multiply</button>
                    <button className="btn btn-primary" onClick={divide}>Divide</button>
                </div>
            </div>

        </div>
    );
}
