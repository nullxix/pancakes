import React from 'react'
// eslint-disable-next-line
// import { PancakeData } from '../dataClasses'
import styled from 'styled-components'
import { Wrapper } from '../spacers'

const SideBySide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`

const PancakeImage = styled.img`
    margin: 0px 20px;
`

/**
 *  A Pancake Review Summary
 * 
 * @param {PancakeData} pancakeData 
 */
export default function PancakeReviewSummary({pancakeData}) {
    console.log(pancakeData)

    return (
        <Wrapper>
            <SideBySide>
                <PancakeImage src={pancakeData.urls.medium} width='450px' alt="pancake"/>
                <MiniReviewSummary reviews={pancakeData.reviews}/>
            </SideBySide>
        </Wrapper>
    )
}

function MiniReviewSummary({reviews}){

    const more = true

    const maxReviews = 3
    const displayReviews = [];

    for(let i = 0; i < reviews.length && i < maxReviews; i++){
        displayReviews.push(<MiniReview key={reviews[i].name} review={reviews[i]} />)
    }
    return (
        <div>
            {displayReviews}
            {more ? <div style={{fontSize: '39px', color: '#AE4900'}}> All Reviews . . . </div> : <></>}
        </div>
    )
}

function MiniReview({review}){
    const {name, comment, pancakeCount} = review
    return (
        <div style={{margin: '35px 0px'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '5px 0'
            }}>
                {
                    pancakeCount > 0 ?
                    Array(Math.min(pancakeCount, 9))
                        .fill('')
                        .map(() => <img width='60px' alt="pancake" src='http://www.pngplay.com/wp-content/uploads/2/Pancake-Transparent-Images.png'/>)
                    : <img width='60px' src='https://static.wikia.nocookie.net/teen-titans-go/images/1/19/Red_X2.png' alt="pancake"/>
                }
            </div>
            <div>
                <span style={{ fontSize: '26px', marginRight:'1em'}}>{name}</span>
                <span style={{ fontSize: '26px', color: '#B48237'}}>{comment}</span>
            </div>
        </div>
    )
}   