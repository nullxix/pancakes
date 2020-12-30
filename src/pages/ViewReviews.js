import React from 'react'
import { Page, PancakeReviewSummary } from '../display'
import { PancakeData, ReviewData } from '../dataClasses'
import { Block } from '../spacers'

export default function ViewReviews() {
    const dummyData = [
        new PancakeData({medium: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
            [
                new ReviewData("Gordon R.", 0, "You Donkey"),
                new ReviewData("Bob Z.", 4, "Calculated"),
                new ReviewData("Jemota H", 7, "Follow me on LinkedIn"),
            ]
        ),
        new PancakeData({medium: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80"},
            [
                new ReviewData("Chris H.", 6, "Reminds me of home"),
                new ReviewData("Simon C.", 4, "A little pitchy, but good sob story"),
            ]
        ),
        new PancakeData({medium: "https://images.unsplash.com/photo-1567977701640-3b6cf5037f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=694&q=80"},
            [
                new ReviewData("Paul R.", 2, "Came by land"),
            ]
        ),
    ]
    return (
        <Page>
            <Block /> 
            {dummyData.map(pancakeDatum => <PancakeReviewSummary pancakeData={pancakeDatum}/>)}
        </Page>
    )
}
