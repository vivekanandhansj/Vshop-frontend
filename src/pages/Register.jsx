import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
    let navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const nameRef = useRef();
    const lastnameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmpasswordRef = useRef();
  
    const handleClick = () => {
        setName(nameRef.current.value);
        setLastName(lastnameRef.current.value);
        setUserName(usernameRef.current.value);
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
        setConfirmPassword(confirmpasswordRef.current.value);
        navigate("/login", { replace: true });
    };
  
  return (
    <Container>
      {" "}
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" type={"text"} ref={nameRef} />
          <Input placeholder="last name" type={"text"} ref={lastnameRef}  />
          <Input placeholder="username" type={"text"}  ref={usernameRef} />
          <Input placeholder="email" type={"email"} ref={emailRef}  />
          <Input placeholder="password" type={"password"} ref={passwordRef}  />
          <Input placeholder="confirm password" type={"password"} ref={confirmpasswordRef}  />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
