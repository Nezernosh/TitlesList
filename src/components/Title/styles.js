import styled from 'styled-components';

const Li = styled.li`
    height: 140px;
    width: 805px;
    margin-top: 8px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;

const Headline = styled.p`
    font-size: 25px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 28px;
    position: absolute;
`;

const Text = styled.p`
    width: 70%;
    margin: 0;
    padding-left: 28px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
    background-color: #890e4f;
    color: white;
    font-size: 25px;
    position: absolute;
    bottom: 10px;
`;

const LeftArea = styled.div`
    height: 100%;
    width: 57%;
    float: left;
    background-color: #d2d3d5;
`;
    
const CentralShape = styled.div`
    width: 25px;
    border-left: 10px outset #d2d3d5;
    border-right: 10px inset #4b4b4d;
    border-top: 140px solid #363435;
    position: absolute;
    left: 54.5%;
    transform: skewX(15deg);
`;

const RightArea = styled.div`
    height: 100%;
    width: 43%;
    float: right;
    background-color: #4b4b4d;
`;

export { Li, Headline, Text, LeftArea, RightArea, CentralShape };
