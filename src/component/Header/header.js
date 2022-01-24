import './header.css'

import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import icon from '../../images/header/logo.png'

import { PageHeader } from 'antd';

class Header extends Component {


    render() {
        return (
            <PageHeader className='header'
            extra={[
                <Link to="/art">Art</Link>,
                <span></span>,
                <span></span>,
                <a href='https://drive.google.com/file/d/1vYEwVdYfdsYyMQSMqbjYKd7dbxkWeeoE/view?usp=sharing' target="_blank" rel="noreferrer">Resume</a>,
                
              ]}
            avatar={{ src: icon, size: 35 }}
            ></PageHeader>
        );
    }
};

export default Header;