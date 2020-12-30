import React from 'react'
import styled from 'styled-components'

const RadioInput = styled.input`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: green;
`

const StyledLabel = styled.label`
    cursor: pointer;
    position: 
    width: 100%;
    height: 100%;
`

const StyledWrapper = styled.div`
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    ${props => props.checked ? 'background-color: #0072b5;' : ''};
    transition: 0.1s;
    min-height: 170px;

    display: flex;
    align-items: center;
    flex-direction: column;
`

const TastyCircle = styled.div`
    ${props => props.checked ? "padding: 25px 35px;" : "padding: 20px 30px;"}
    ${props => props.checked ? "box-shadow: 0px 10px 12px 0px #00000026;" : "box-shadow: 0px 10px 10px 0px #00000026;"}
    margin: 20px;
    border-radius: 2000px;
    background-color: #872600;
    background-color: #b55a30;
    color: white;
    font-size: 34px;
    transition: 0.2s;
    box-shadow: 0px 10px 10px 0px #00000026;

    ${StyledWrapper}:active & {
        padding: 18px 28px;
        transition: 0s;
        box-shadow: 0px 5px 10px 0px #00000026;
    }
`

/**
 * A better looking radio button
 * 
 * @param {String} props.name 
 * @param {*} props.label
 * @param {*} props.imageUrl 
 * @param {Boolean} props.checked
 * @param {Function} props.onChange
 */
export default function TastyRadioButton(props) {
    console.log(props)
    const {name, label, imageUrl, onChange, checked, ...restProps} = props
    return (
        <StyledLabel>
            <StyledWrapper checked={checked}>
                <div>
                    <img alt="pancake" height='60px' src={imageUrl || 'http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png'}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "130px", minHeight: "160px" }}>
                    <TastyCircle checked={checked}>
                        {label}
                    </TastyCircle>
                </div>
                <RadioInput type="radio" hidden checked={checked} onChange={onChange} {...restProps}/>
            </StyledWrapper>
        </StyledLabel>
    )
}