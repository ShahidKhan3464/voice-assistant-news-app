import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards'
import useStyles from './style.js';
import alanAI from './AlanAI.jpeg'

const alanKey = '6fa0bb922ad016cf9b2598e9c6ee42c22e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
    const classes = useStyles()
    const [newsArticles, setNewsArticles] = useState([])
    const [activeArticle, setActiveArticle] = useState(-1)

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles)
                }
                else if (command === 'highlight') {
                    setActiveArticle((preActiveArticle) => preActiveArticle + 1)
                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo} src={alanAI} alt="logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App