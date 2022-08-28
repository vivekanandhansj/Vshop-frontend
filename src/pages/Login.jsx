import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleClick = () => {
       
        setUserName(usernameRef.current.value);
      
        setPassword(passwordRef.current.value);
 
        navigate("/", { replace: true });
    };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" type={"text"}  ref={usernameRef} />
          <Input placeholder="password" type={"password"} ref={passwordRef}  />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;