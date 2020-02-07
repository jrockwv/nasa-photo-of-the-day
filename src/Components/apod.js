import React, {useState, useEffect} from  "react";

import axios from "axios";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';

import style from "./style.css";


function APOD(){
    const [apodInfo, setApodInfo] = useState('');

    useEffect(() => {
        const findAPOD = () =>
    axios.get('https://api.nasa.gov/planetary/apod?api_key=GzWLoAeGirCQBpdgF6vIs6gN2Ld9UeAxtRETKN1W')
    .then(respond => {
        setApodInfo(respond.data)
    })  
    findAPOD();
}, [])

return(
        
    <div style={{ maxWidth: "1000px" }}>
        <Col xs="6">
            <Card>
                <div>
                <CardImg top width="85%" src={apodInfo.url} alt={apodInfo.title} />
                <h1><CardTitle style={{padding:"4%"}}>{apodInfo.title}</CardTitle></h1>
                    <CardSubtitle><strong>NASA P.O.D</strong><br></br><strong>{apodInfo.date}</strong></CardSubtitle>
                    <div class='text'><CardText style={{padding:"3%"}}>{apodInfo.explanation}</CardText>
                    <CardText style={{padding:"3%"}}>{apodInfo.explanation}</CardText></div>
                    <footer>©Copyright: {apodInfo.copyright}</footer>
                </div>
            </Card>
        </Col>
    </div>

);
}

export default APOD;