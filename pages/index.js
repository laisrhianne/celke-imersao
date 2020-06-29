import React, { useState } from 'react';
import Head from 'next/head';

import {
  Container,
  Jumbotron,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='site sobre ...' />
        <meta name='author' content='Rhianne' />
      </Head>
      <Navbar color='dark' dark expand='md' className='fixed-top'>
        <Container>
          <NavbarBrand href='/'>Celke</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/#inicio'>Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/#servico'>Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/#portfolio'>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/laisrhianne'>GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Jumbotron fluid className='descr-top'>
        <style>{`.descr-top{
      background-color: #000;
      color: #FFF;
      padding-top: 150px;
      padding-bottom: 100px;
      margin-bottom: 0rem !important;
      position: relative;
  }.inicio-link{
      position: absolute;
      top: 0px;
  }`}</style>
        <Container className='text-center'>
          <a name='inicio' className='inicio-link' />
          <h1 className='display-4 mb-4'>
            Temos a solução que a sua empresa precisa
          </h1>
          <p className='lead mb-4'>Lorem Ipsum</p>
          <hr className='my-2' />
          <p>Lorem Ipsum</p>
          <p className='lead'>
            <Button color='warning' size='lg' outline>
              ENTRE EM CONTATO
            </Button>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className='servicos'>
        <style>{`.servicos{
    background-color: #FFF;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: 0rem !important;
    position: relative;
}.circulo{
    width: 140px;
    height: 140px;
    background-color: #fed136;
    font-size: 52px;
    padding-top: 30px;
    color: #FFF;
}.centralizar{
    margin: 0 auto !important;
    float: none !important;
}.servico-link{
    position: absolute;
    top: 0px;
}`}</style>
        <Container className='text-center'>
          <div>
            <a name='servico' className='servico-link' />
            <h2 className='display-4'>Serviços</h2>
            <p className='lead pb-4'>Subtítulo</p>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='rounded-circle circulo centralizar'>
                  <FontAwesomeIcon icon='code' />
                </div>
                <h2 className='mt-4 mb-4'>Heading</h2>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
              </div>
              <div className='col-lg-4'>
                <div className='rounded-circle circulo centralizar'>
                  <FontAwesomeIcon icon='laptop-code' />
                </div>
                <h2 className='mt-4 mb-4'>Heading</h2>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Cras mattis
                  consectetur purus sit amet fermentum. Fusce dapibus, tellus ac
                  cursus commodo, tortor mauris condimentum nibh.
                </p>
              </div>
              <div className='col-lg-4'>
                <div className='rounded-circle circulo centralizar'>
                  <FontAwesomeIcon icon='mobile-alt' />
                </div>
                <h2 className='mt-4 mb-4'>Heading</h2>
                <p>
                  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Vestibulum id ligula porta felis euismod
                  semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className='portfolio'>
        <style>
          {`.portfolio{
                  background-color: #f8f9fa;
                  padding-top: 80px;
                  padding-bottom: 80px;
                  margin-bottom: 0rem !important;
                  position: relative;
              }.portfolio-link{
                  position: absolute;
                  top: 0px;
              }`}
        </style>
        <Container className='text-center '>
          <a name='portfolio' className='portfolio-link' />
          <div>
            <h2 className='display-4'>Portfolio</h2>
            <p className='lead pb-4'>Featured content of information</p>
          </div>
          <div className='row row-cols-1 row-cols-md-2 row-cols-md-3'>
            <div className='col mb-4'>
              <div className='card'>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className='col mb-4'>
              <div className='card'>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className='col mb-4'>
              <div className='card'>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col mb-4'>
              <div className='card'>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className='col mb-4'>
              <div className='card'>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className='col mb-4'>
              <div className='card'>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className='rodape'>
        <style>{`.rodape{
                background-color: #000;
                color: #fff;
                padding-top: 0px;
                padding-bottom: 0px;
                margin-bottom: 0rem !important;
            }`}</style>
        <Container className='text-center'>
          <footer className='footer mt-auto py-3'>
            <div className='container'>
              <span className='text-muted'>Rhianne</span>
            </div>
          </footer>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomePage;
