import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import {
  FaRegEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaPuzzlePiece
} from "react-icons/fa"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  padding: 1rem;
  display: inline-block;
  text-decoration: none;

  &.current-page {
    //border-bottom: 2px solid #222;
  }
  &.active,
  &:hover {
    background: #555;
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      //background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //padding: 0.5rem 5vw;

      @media (min-width: calc(550px + 10vw)) {
        padding-left: calc((100vw - 550px - 0.5rem) / 2);
        padding-right: calc((100vw - 550px - 0.5rem) / 2);
      }
    `}
  >
    <NavLink
      to='/'
      fontWeight='bold'
      css={css`
        text-transform: capitalize;
        padding: 0.5rem 2rem;
        font-size: 1.4rem;
        color: white;
        background: #da491c;
      `}
    >
      Asociacion Peruana <br /> de Cirugia Vertebral
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to='/' activeClassName='current-page active'>
        Inicio
      </NavLink>
      <NavLink to='/congreso/' activeClassName='current-page active'>
        IV Congreso
      </NavLink>
      <NavLink to='/noticias/' activeClassName='current-page active'>
        Noticias
      </NavLink>
      <NavLink to='/estatuto/' activeClassName='current-page active'>
        Estatuto
      </NavLink>
      <NavLink to='/historia/' activeClassName='current-page active'>
        Historia
      </NavLink>
      <NavLink to='/directiva/' activeClassName='current-page active'>
        Directiva
      </NavLink>
      <NavLink to='/miembros/' activeClassName='current-page active'>
        Miembros
      </NavLink>

      <div className='icons'>
        <div className='icon-wrap email'>
          <FaRegEnvelope />
        </div>
        <div className='icon-wrap fb'>
          <FaFacebookSquare />
        </div>
        <div className='icon-wrap tw'>
          <FaTwitterSquare />
        </div>
      </div>
    </nav>
  </header>
)

export default Header
