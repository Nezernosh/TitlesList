import styled from 'styled-components';

const Form = styled.form`
    margin-top: 8px;  
    height: 105px;
    background-color: #d2d3d5;
`;

const Input = styled.input`
    width: 400px;
    height: 42px;
    border: 0;
    margin-top: 25px;
    margin-left: 20px;
    padding-left: 5px;
    font-size: 25px;
`;

const Button = styled.button`
    background-color: #890e4f;
    color: white;
    border: 0px;
    width: 115px;
    height: 42px;
    text-align: left;
    font-size: 25px;
    margin-top: 25px;
    margin-left: 18px;
    padding-left: 18px;
`;

export { Form, Input, Button };
