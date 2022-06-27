import React from 'react'

import {Card, Button} from 'react-bootstrap'
import styled from 'styled-components'

import {StarFill, CaretRight} from 'react-bootstrap-icons'

import sampleImg from '../../assets/images/Model-PNG.png'
import {colorPalettes} from '../../config'

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Cardy = styled(Card)`
  width: 300px;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0.5rem;

  @media (max-width: 400px) {
    width: 100%;
  }
`

const Btn =  styled(Button)`
  background-color: ${colorPalettes.darkBlue};
  border: none;

  &:hover {
    background-color: ${colorPalettes.violet};
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const CustomBtn = styled(Button)`
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  color: ${colorPalettes.darkBlue} !important;
  font-weight: bolder;

  &:hover {
    color: ${colorPalettes.violet} !important;
  }
`

const ProductsCarousel = () => {
  
  return (
    <MainWrapper>
      <Wrapper>
      {[0,0,0,0,0].map((v, i) => (
        <Cardy key={i}>
          <Cardy.Img variant="top" src={sampleImg} style={{width: '30%'}} />
          <Cardy.Body style={{width: '100%'}}>
            <div style={{fontSize: '.8rem'}}>
              <Flex>
                <h5>Silky'</h5>
                <StarFill style={{color: 'yellow'}}/>
                <StarFill style={{color: 'yellow'}}/>
                <StarFill style={{color: 'yellow'}}/>
                <StarFill />
                <StarFill />
              </Flex>
              <p>lorem ipsum</p>
            </div>
            <Btn>view</Btn>
          </Cardy.Body>
        </Cardy>
      ))}
      </Wrapper>
      <CustomBtn>All products <CaretRight style={{fontSize: '1.2rem'}} /></CustomBtn>
    </MainWrapper>
  )
}

export default ProductsCarousel