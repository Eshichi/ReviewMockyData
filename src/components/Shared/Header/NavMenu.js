import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './NavMenu.css';


export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            visibleLogin: false,
            visibleRegister: false
        };


    }

    showModalLogin = () => {
        this.setState({
            visibleLogin: true,
        })
    }

    showModalRegister = () => {
        this.setState({
            visibleRegister: true,
        })
    }

    handleCancelLogin = () => {
        this.setState({
            visibleLogin: false,
        })
    }
    handleCancelRegister = () => {
        this.setState({
            visibleRegister: false,
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar-css" light >
                    <Container>
                        <NavbarBrand tag={Link} to="/">JLPTReview</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow nav-tab-css">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Hiragana">Hiragana</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Katakana">Katakana</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Kanji">Kanji</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Words">Words</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} disabled className="text-dark" to="/Phrases">Phrases</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/About">About</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                        <Row>
                            <Col span={11} offset={1}>
                                <Button type="primary"  className="register-button" onClick={this.showModalRegister}>Register</Button>
                            </Col>
                            <Col span={8} offset={4}>
                                <Button type="primary"  className="login-button" onClick={this.showModalLogin}>Login</Button>
                            </Col>
                        </Row>

                        <Modal
                            visible={this.state.visibleRegister}
                            title="Registration"
                            onOk={this.showModalRegister}
                            onCancel={this.handleCancelRegister}

                        >
                            Register
                        </Modal>

                        <Modal
                            visible={this.state.visibleLogin}
                            title="Registration"
                            onOk={this.showModalLogin}
                            onCancel={this.handleCancelLogin}
                        >
                            Login
                        </Modal>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
