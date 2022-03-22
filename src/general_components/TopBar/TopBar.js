import React from "react";

import {RiUserStarLine} from 'react-icons/ri';
import {Container, Row, Col, Button} from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import {AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart} from "react-icons/ai"
import "./TopBar.css"

const TopBar = () => {
  return (
          <Stack direction={"horizontal"} id={"top-bar"} gap={3}>
              <Col className={"ms-auto"}>
                  <Row >
                      <Col>
                          <h3>Management</h3>
                      </Col>
                      <Col className={"title-chuwa"}>
                          <text>Chuwa</text>
                      </Col>
                  </Row>
              </Col>
                            <Col>
                                <input placeholder={"search"} className={"top-var-search-bar"}/>
                                <Button>
                                <AiOutlineSearch/>
                            </Button>
                            </Col>
              <Button>
                  <AiOutlineUser/>
              </Button>
              <Button>
                  Log out
              </Button>
              <Button>
                  <AiOutlineShoppingCart/>
              </Button>
          </Stack>
  )
}

export default TopBar;