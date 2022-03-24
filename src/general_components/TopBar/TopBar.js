import React from "react";

import {RiUserStarLine} from 'react-icons/ri';
import {Container, Row, Col, Button} from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import {AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart} from "react-icons/ai"
import "./TopBar.css"

const TopBar = () => {
  return (

          <Stack direction={"horizontal"} id={"top-bar"} gap={3}>
              <Col className={"title-search-bar"} xs={3}>
                  <Row className={"top-bar-title"}>
                      <Col className={"title-management"}>
                          <h3 >Management</h3>
                      </Col>
                      <Col className={"title-chuwa"}>
                          <text>Chuwa</text>
                      </Col>
                  </Row>
              </Col>
                            <Col class={"mx-auto"}>
                                <input placeholder={"search"} className={"top-var-search-bar"}/>
                                <Button>
                                <AiOutlineSearch/>
                            </Button>
                            </Col>
<Col>
    <Button>
        <AiOutlineUser/>
    </Button>
    <Button>
        Log out
    </Button>
    <Button>
        <AiOutlineShoppingCart/>
    </Button>
</Col>
          </Stack>
  )
}

export default TopBar;