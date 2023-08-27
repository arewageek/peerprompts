'use client'
import { useState, useEffect } from 'react'
import { EachPrompt } from './EachPrompt'


export const Feeds = () => {

    const [feeds, setFeeds] = useState([])

    useEffect(() => {
        setFeeds([
            {
                id: 1,
                name: 'name 1',
                url: '#',
                tags: ['ungrouped'],
                interractions: {
                    likes: 20,
                    reposts: 0,
                    clones: 1,
                }
            },
            {
                id: 2,
                name: 'name 2',
                url: '#',
                tags: ['Poem', 'Literature'],
                interractions: {
                    likes: 200,
                    reposts: 102,
                    clones: 112,
                }
            },
            {
                id: 3,
                name: 'name 3',
                url: '#',
                tags: ['Javascript', 'Coding', 'SDK development'],
                interractions: {
                    likes: 0,
                    reposts: 1,
                    clones: 14,
                }
            },
            {
                id: 3,
                name: 'name 3',
                url: '#',
                tags: ['Website'],
                interractions: {
                    likes: 30,
                    reposts: 91,
                    clones: 5,
                }
            }
        ])
    })
    
    return (
        <div className='w-full flex flex-wrap px-[30pt] md:px-[40pt]'>
            {
                feeds && feeds.map(feed => <EachPrompt id={feed.id} url={feed.url} tags={feed.tags} interractions={feed.interractions} />)
            }
        </div>
    )
}
