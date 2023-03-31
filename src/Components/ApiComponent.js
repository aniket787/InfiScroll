import React from 'react'
import Card from './Card';
import './Api.css';

const ApiComponent = ({apiInfo})=>{
    return(

        <div className="wrapper">
            <div className="container">
                <h1>List Of Cards</h1>
                <div className="grid grid-three-column">
                    {apiInfo.map((curVal, id) =>{
                        return <Card key={id} myData={curVal} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default ApiComponent;