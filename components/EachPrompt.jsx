import Link from "next/link"

export const EachPrompt = ({ id, url, tags, interractions }) => {
    return (
        <div className='p-3 w-full md:w-1/4'>
            <Link href={url}>
                <div className="bg-white rounded-xl shadow-md text-gray-600 w-full h-auto py-4 px-5">
                    <div className="card-header text-xs font-bold flex justify-between items-center">
                        <div className="text-blue-500">Austin Ameh</div>
                        <div className="text-[8pt] hover:text-blue-500 transition-all">Follow</div>
                    </div>
                    <div className="prompt-exerpt text-sm py-7 px-2">
                        <p>
                            Hey GPT, write me an 8 stanza poem on the West African culture prior to the european colonization emphasizing on their mode of communication and transportation
                        </p>

                        <p className="text-blue-500 font-semibold text-xs py-3 hover:text-gray-500 transition-colors">
                            Read More ...
                        </p>
                    </div>
                    <div className="pb-[20pt] text-xs font-semibold italic">
                        Tags:{' '}
                        {
                            tags.map((tag, id) => {
                                return(
                                    <>
                                        <span key={id} className="text-black underline transition hover:text-gray-500">
                                            {tag}
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="flex justify-center space-x-3 items-center text-[7pt] font-semibold text-black">
                        <div className="text-black hover:text-blue-600">
                            Like [{interractions.likes}]
                        </div>
                        <div className="text-black hover:text-blue-600">
                            Clone [{interractions.clones}]
                        </div>
                        <div className="text-black hover:text-blue-600">
                            Share [{interractions.reposts}]
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
