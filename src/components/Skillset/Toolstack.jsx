import React from "react"
import { Col, Row } from "react-bootstrap"
import { BiLogoAws, BiLogoDocker } from "react-icons/bi"
import {
  SiNetlify,
  SiNginx,
  SiPm2,
  SiPostman,
  SiVercel,
  SiVisualstudiocode
} from "react-icons/si"

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #0078d7"}}>
        <SiVisualstudiocode color="#0078d7 " />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  style={{boxShadow : " 5px 6px 4px 3px #ef5b25"}}>
        <SiPostman color="#ef5b25"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify  style={{color : "ButtonHighlight"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  style={{boxShadow : " 5px 6px 4px 3px greenyellow"}}>
        <SiNginx  style={{color : "greenyellow"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #0db7ed"}}>
        <BiLogoDocker color="#0db7ed" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #FF9900"}}>
        <BiLogoAws color="#FF9900" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px indigo"}}>
        <SiPm2 style={{color :"indigo"}} />
      </Col>
    </Row>
  );
}

export default Toolstack;
