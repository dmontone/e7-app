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

  & > * { z-index: 2; }
`

export const HeroImage = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  background: ${({ theme }) => theme.colors.black};
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: opacity 1s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    opacity: 0.7;
  }
`

export const Content = styled.div`
  padding: 32px 16px 40px 16px;
  text-align: center;
`
