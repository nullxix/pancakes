import React, { useState } from 'react'
import { Page, PinkThing, Button, Spacer } from '../display'
import styled from 'styled-components'

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

    function handleChange(event){
        const {name, value} = event.target

        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <Page>
            <ContentWrapper>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
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
