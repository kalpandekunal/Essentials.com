import { Box ,Flex,Heading} from "@chakra-ui/react";
import React, { useState } from 'react';
import { Link } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  VStack
} from '@chakra-ui/react';


function Account(){

    const SignupForm = () => {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          if (!username || !email || !password) {
            setError('Please enter email and password.');
            return;
          }
      
          const response = await fetch(`https://myapi.com/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username,email, password }),
          });
      
          if (!response.ok) {
            setError('Unable to signup. Please try again.');
            return;
          }
      
          const data = await response.json();
          console.log(data);
        };
      
        return (
          <Box borderWidth="1px" borderRadius="lg" bg={"gray.100"} p={6} boxShadow="lg" w={"40%"} mb={"50px"}>
            <Heading mb={4}>Signup</Heading>
            <VStack spacing={4} alignItems="stretch">
            <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
           placeholder="Username"
           border={"1px solid teal"}
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
            </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                placeholder="Enter email"
                border={"1px solid teal"}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                placeholder="Enter password"
                border={"1px solid teal"}
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
                Signup
              </Button>
            </VStack>
          </Box>
        );
      };
  
  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      alert("Login Successfull")
    
  
      if (!email || !password) {
        setError('Please enter email and password.');
        return;
      }
  
      const response = await fetch(`https://myapi.com/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        setError('Unable to login. Please check your email and password.');
        return;
      }
  
      const data = await response.json();
      console.log(data);
    };
  
    return (
        <Box borderWidth="1px" borderRadius="lg" bg={"gray.100"} p={6} boxShadow="lg" w={"40%"}>
        <Heading mb={4}>Login</Heading>
      <VStack spacing={4} alignItems="stretch">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
          placeholder="Enter email"
          border={"1px solid teal"}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
          placeholder="Enter password"
          border={"1px solid teal"}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
    
        <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        
      </VStack>
      </Box>
    );
  };

    return (
        
            <Box  m={"auto"} mt={"100px"} ml={"200px"}>
        <Flex gap={"50px"}>
        <SignupForm />
        <LoginForm />
        </Flex>
        </Box>
        
    )
}

export default Account;