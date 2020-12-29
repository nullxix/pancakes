import React from 'react'
import { Page, Title, Spacer, Button, Paragraph, Section, PinkThing } from '../../display';
import styled from 'styled-components'
import Step from './Step'

const SideBySide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    padding: 20px 40px;
` 

export default function Home() {
    return (
        <Page>
            {/* Welcome */}
            <Section 
                fullscreen 
                verticalCenter
                horizontalCenter
            >
                <Spacer/>
                    <Title>
                        Eat Your Pancakes You Filthy Animal
                    </Title>
                <Spacer/>
            </Section>

            {/* How It Works */}
            
            <Section>

                {/* PINK PART */}
                
                <PinkThing>
                    <SideBySide>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Paragraph>
                                <Title inverted alignLeft>How It Works</Title>
                                <div>
                                    Is your life boring? Quarantine got you down? Try a pancake, without the mess! Download our specialized, carefully crafted pancake, Print it out, make a review! It’s that simple! 
                                </div>
                                <div style={{padding: '20px 0px'}}>
                                    <Button.StrongLink inverted>Try it Out!</Button.StrongLink>
                                </div>
                            </Paragraph>
                        </div>
                    </SideBySide>
                </PinkThing>
                
                {/* END PINK PART */}
                
                <div style={{width: '100%'}}>
                        <Step number={1}>Print a Picture of a Pancake</Step>
                        <Step number={2} right>Eat The Picture of the Pancake</Step>
                        <Step number={3}> Tell the World </Step>
                </div>
            </Section>
        </Page>
    )
}