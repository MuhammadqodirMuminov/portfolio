import React from "react"
import { Col, Row } from "react-bootstrap"
import { BiLogoJavascript } from "react-icons/bi"
import {
  DiGit,
  DiReact
} from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { IoLogoJavascript } from "react-icons/io"
import { RiVuejsFill } from "react-icons/ri"
import {
  SiGraphql,
  SiHtml5,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTypescript
} from "react-icons/si"

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px rgba(240, 9, 9, 0.55)"}}>
        <SiHtml5 style={{color : "red"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px yellow"}}>
        <BiLogoJavascript style={{color : "yellow"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px greenyellow"}}>
        <FaNodeJs style={{color : "greenyellow"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px DodgerBlue"}}>
        <DiReact style={{color : "DodgerBlue"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #764abc"}}>
        <SiRedux style={{color : "#764abc "}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #3FA037"}}>
        <SiMongodb style={{color : "#3FA037"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #e535ab"}}>
        <SiGraphql style={{color : "#e535ab "}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #007acc"}}>
        <SiTypescript style={{color : "#007acc"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #41B883"}}>
        <RiVuejsFill style={{color : "#41B883"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #f34f29"}}>
        <DiGit color="#f34f29" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #000"}}>
        <SiNextdotjs color="black" style={{backgroundColor : "white" ,borderRadius : "50%"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #fff"}}>
        <GrMysql color="white"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px #0064a5"}}>
        <SiPostgresql color="#0064a5"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{boxShadow : " 5px 6px 4px 3px red"}}>
        <SiNestjs color="red"  />
      </Col>
    </Row>
  );
}

export default Techstack;
