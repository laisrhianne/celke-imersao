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
                <NavLink href='/components/'>Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/laisrhianne'>
                  Portfolio
                </NavLink>
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
  }`}</style>
        <Container className='text-center'>
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
}`}</style>
          <Container className='text-center'>
              <div>
                  <h2 className='display-4'>Serviços</h2>
                  <p className='lead pb-4'>Subtítulo</p>
              </div>
          </Container>
      </Jumbotron>
    </div>
  );
}

export default HomePage;
