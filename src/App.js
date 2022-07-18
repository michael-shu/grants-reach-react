import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputForm from './components/InputForm';

import logo from './images/logo.png';
import check from './images/check.svg';

import Cards from './components/Cards';

import Voucher from './images/voucher.png';
import Grant from './images/housingGrant.png';
import Income from './images/lowIncomeResources.png';

import Housing from './images/emergencyHousing.png';
import Rent from './images/rentRelief.png';
import Repair from './images/homeRepair.png';

import Card from 'react-bootstrap/Card';

import React, {useState} from 'react';

function App() {

  const cardContent = [
    {
      title: "Vouchers", image: Voucher, text: "Explore resources that assisst low income families, " +
        "the elderly and the disabled afford a safe place to live. These programs are offered by a number " +
        "of institutions in an effort to help others achieve a healthier, more stable living environment."
    },

    {
      title: "Housing Grants", image: Grant, text: "Search through a wide range of trusted financial relief " +
        "opportunities including assistance for first time home, buyers, single family home repairs and more. We’ve built " +
        "a free tool to make finding the help you need simple."
    },

    {
      title: "Low Income Resources", image: Income, text: "Browse local opportunities that may help eligible low income " +
        "individuals stay afloat and avoid monetary crisis. We feature exclusive content and offers to help " +
        "families get connected to programs in their region."
    },

    {
      title: "Emergency Housing", image: Housing, text: "There are a variety of instances in which families face crisis " +
        "and need urgent assistance. See available solutions from nonprofits that help individuals who qualify avoid " +
        "eviction and provide financial support"
    },

    {
      title: "Rent Relief Programs", image: Rent, text: "For many individuals and families, finding organizations that assist renters " +
        "or landlords can be a challenge. Alleviate the stress of your search by utilizing our tool that will instantly provide you " +
        "with programs you may qualify for."
    },

    {
      title: "Home Repair", image: Repair, text: "Whether you own or rent a house, there are simple options that can help you save " +
        "money on bills and receive free home repairs. Gain access to the list of assistance programs near you."

    }

  ]

  const [disclaimer,setDisclaimer] = useState(false);

  return (
    <div id="parent">

      <Container id="topContainer">
        <Row>
          <img src={logo} className="mx-auto" style={{ width: "175px" }} />
        </Row>

        <Row>
          <Col id="topDiv">
            <Col xl={4} md={6} xs={11} id="inputBox">
              <h1>Trusted Resources For Housing Needs</h1>
              <p style={{ color: "grey" }}>Sign up for free to explore financial opportunities that help with home improvement
                and rent expenses in your area.</p>

              <InputForm></InputForm>

            </Col>
          </Col>
        </Row>
      </Container>

      <Container id="midContainer">
        <Row>
          <img id="check" src={check} />
          <h2>Find The Help You Need</h2>
          <p>Answer a few quick questions about your situation to get matched to resources you may be eligible to receive.</p>
        </Row>
      </Container>

      <Container id="bottomContainer">
        <Row>
          {cardContent.slice(0, 3).map((content, index) => {
            return (
              <Cards image={content.image} title={content.title} text={content.text}>
              </Cards>
            );
          })}
        </Row>

        <Row>
          {cardContent.slice(3, 6).map((content, index) => {
            return (
              <Cards image={content.image} title={content.title} text={content.text}>
              </Cards>
            );
          })}
        </Row>
      </Container>

      <Container>
        <Card id="disclaimer">
          <Card.Header><h1>Disclaimer</h1></Card.Header>
          <Card.Text>Grantsreach is a privately held for-profit entity and has no affiliation or relationship with the United States Government or U.S. Department of Education.
            Grantsreach offers links to other third-party websites and service

            {disclaimer ? <span>as helpful resources to locate internet content that may be of interest to you. We may receive an affiliate 
            commission for referrals by you using such links. We pay our operating costs through our advertising revenue by having third-party affiliate offers. Grantsreach advises that you 
            not pay for any third part service that is provided to third parties’ websites and/or services through Grantsreach are managed by such third parties. For more information on 
            government education grants, visit https://studentaid.ed.gov/sa/types/grants-scholarships/pell 
            </span> : <span></span>}

            <a id = "smLink" onClick = {() => setDisclaimer(!disclaimer)}>
              {disclaimer ? <span> show less</span> : <span> show more</span>}
            </a>
            </Card.Text>
        </Card>

      </Container>
    </div>


  );
}

export default App;
