import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import Menu from '../components/Menu';

import {
    Container,
    Jumbotron,
    Button
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Home = (data) => (
    <div>
        <Head>
            <title>Home - Agência Digital</title>
            <meta name="description" content="Agência Digital" />
            <meta name="author" content="Ramon Goveia" />
        </Head>
        <Menu />
        <Jumbotron fluid className="descr-top">
            <style>{
                `.descr-top{
                        background-color: #000;
                        color: #fff;
                        padding-top: 150px;
                        padding-bottom: 100px;
                        margin-bottom: 0rem !important;
                        position: relative;                 
                    }.inicio-link{
                        position: absolute;
                        top: 0px;
                    }`
            }</style>
            <Container className="text-center">
                <a name="inicio" className="inicio-link" />
                <div>
        <h1 className="display-4 mb-4">{data.response.home.topTitle}</h1>
                    <p className="lead mb-4">{data.response.home.topSubTitle}</p>
                    <p className="lead">
                        <a href={data.response.home.topLinkBtn} className="btn btn-outline-warning btn-lg">
                            <a>{data.response.home.topTextBtn}</a>
                        </a>
                    </p>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="servicos">
            <style>{
                `.servicos{
                        background-color: #fff;
                        padding-top: 80px;
                        padding-bottom: 80px;
                        margin-bottom: 0rem !important;
                        position: relative;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #fed136;
                        font-size: 52px;
                        padding-top: 24px;
                        color: #fff;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }.servicos-link{
                        position: absolute;
                        top: 0px;
                    }`
            }</style>
            <Container className="text-center">
                <a name="servicos" className="servicos-link" />
                <div>
                    <h2 className="display-4">{data.response.home.servTitle}</h2>
                    <p className="lead pb-4">{data.response.home.servSubTitle}</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servUmIcone} />
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servUmTitle}</h2>
                        <p>{data.response.home.servUmDesc}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servDoisIcone} />
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servDoisTitle}</h2>
                        <p>{data.response.home.servDoisDesc}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servTresIcone} />
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servTresTitle}</h2>
                        <p>{data.response.home.servDescDesc}</p>
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="portifolio">
            <style>{
                `.portifolio{
                        background-color: #f8f9fa;
                        padding-top: 80px;
                        padding-bottom: 80px; 
                        margin-bottom: 0rem !important;
                        position: relative;
                    }.portifolio-link{
                        position: absolute;
                        top: 0px;
                    }`
            }</style>
            <Container className="text-center">
                <a name="portifolio" className="portifolio-link" />
                <div>
                    <h2 className="display-4">{data.response.home.portTitle}</h2>
                    <p className="lead pb-4">{data.response.home.portSubTitle}</p>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portUmFileName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portUmTitle}</h5>
                                <p className="card-text">{data.response.home.portUmSubTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portDoisFileName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portDoisTitle}</h5>
                                <p className="card-text">{data.response.home.portDoisSubTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portTresFileName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portTresTitle}</h5>
                                <p className="card-text">{data.response.home.portTresSubTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portQuatroFileName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portQuatroTitle}</h5>
                                <p className="card-text">{data.response.home.portQuatroSubTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portCincoFileName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portCincoTitle}</h5>
                                <p className="card-text">{data.response.home.portCincoSubTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portSeisFileName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portSeisTitle}</h5>
                                <p className="card-text">{data.response.home.portSeisSubTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="quem-somos">
            <style>{
                `.quem-somos{
                        background-color: #fff;
                        padding-top: 80px;
                        padding-bottom: 80px; 
                        margin-bottom: 0rem !important;
                        position: relative;
                    }.quem-somos-link{
                        position: absolute;
                        top: 0px;
                    }`
            }</style>
            <Container>
                <a name="quem-somos" className="quem-somos-link" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="rodape">
            <style>{
                `.rodape{
                        background-color:#000;
                        color: #fff;
                        padding-top:0px;
                        margin-bottom: 0rem !important;
                    }`
            }</style>
            <Container className="text-center">
                <footer className="footer mt-auto py-3">
                    <div className="container">
                        <span className="text-muted"> © 2020 Copyright: Ramon Goveia</span>
                    </div>
                </footer>
            </Container>
        </Jumbotron>
    </div>
);

Home.getInitialProps = async () =>{
    var response = await axios.get('http://localhost:8080/home');
    
    return {response: response.data};
}

export default Home;