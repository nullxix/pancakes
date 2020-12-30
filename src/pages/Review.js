import React, { useState } from 'react'
import { Page, PinkThing, Button, TastyRadioButton } from '../display'
import styled from 'styled-components'
import { Block } from '../spacers'

const DEFAULT_FORM_DATA = {
    'comment': ''
}

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${props => props.pad ? "padding: 60px;" : ""}
`

export default function Review() {

    const [data, setData] = useState(DEFAULT_FORM_DATA)
    const [radioData, setRadioData] = useState(false)

    function handleChange(event){
        const {name, value} = event.target

        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleRadioChange(event){
        console.log("radio change yay")
        const {value} = event.target
        setRadioData(value)
    }

   
    return (
        <Page>
            <Block />
            <Block />
            <Block />
            <Block />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TastyRadioButton imageUrl='http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png' onClick={handleRadioChange} name='charlie' value="1" checked={radioData === '1'} label='1'/>
                <TastyRadioButton imageUrl='http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png' onClick={handleRadioChange} name='charlie' value="2" checked={radioData === '2'} label='2'/>
                <TastyRadioButton imageUrl='http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png' onClick={handleRadioChange} name='charlie' value="3" checked={radioData === '3'} label='3'/>
                <TastyRadioButton imageUrl='http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png' onClick={handleRadioChange} name='charlie' value="4" checked={radioData === '4'} label='4'/>
                <TastyRadioButton imageUrl='http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png' onClick={handleRadioChange} name='charlie' value="Many" checked={radioData === 'Many'} label='Many'/>
            </div>
            <ContentWrapper>

                <form style={{width: '100%'}}>
                    <PinkThing>
                        <ContentWrapper pad>
                                <div>
                                    <textarea 
                                        name='comment' 
                                        placeholder='Please dont leave a crêpe review or butter me up' 
                                        rows="15" 
                                        cols="40"
                                        style={{
                                            fontSize: '42px',
                                            margin: '20px',
                                            padding: '0.5em',
                                            border: '8px solid black'
                                        }}
                                        value={data['comment']}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Button.Strong> Review Complete! </Button.Strong>
                                </div>
                        </ContentWrapper>
                    </PinkThing>
                </form>
            </ContentWrapper>
        </Page>
    )
}
