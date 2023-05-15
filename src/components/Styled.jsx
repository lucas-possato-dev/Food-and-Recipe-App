import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    min-height: 15rem;

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
  }
`;

export const CardCuisine = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.85);

  h4 {
    color: white;
    font-size: 0%.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;

    h4 {
      font-size: 0.6rem;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

export const FormStyle = styled.form`
  margin: 0rem 5rem;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  div {
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media (max-width: 768px) {
    margin: 0rem 2rem;

    input {
      font-size: 1rem;
      padding: 0.8rem 2rem;
    }
  }
`;

export const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1rem;
    }

    li {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export const Info = styled.div`
  margin-left: 5rem;
  li:first-child {
    margin-top: 2rem;
  }
  li {
    font-size: 1rem;
  }
  p {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: start;
  align-items: center;
  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`;
