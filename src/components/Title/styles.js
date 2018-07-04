import styled from 'styled-components';
import BackgroundImage from './li-background.png';

const Li = styled.li`
    height: 110px;
    width: 805px;
    margin-top: 8px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    background: url(${BackgroundImage});
`;

const Headline = styled.p`
    font-size: 25px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 28px;
`;

const Text = styled.p`
    height: 41px;
    width: 600px;
    margin: 0;
    padding-left: 28px;
    padding-top: 15px;
    text-align: left;
    background-color: #890e4f;
    color: white;
    font-size: 25px;
`;

export { Li, Headline, Text };