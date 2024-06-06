import styled from 'styled-components'

export const Wrapper = styled.header`
  
`

export const Hero = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.black};

  & > * { z-index: 2; }
`

export const HeroImage = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left:0;
  z-index: 1;
  opacity: 0.7;
`

export const Content = styled.div`
  padding: 32px 16px 40px 16px;
  text-align: center;
`
