import { useRouter } from 'next/router'
import React from 'react'

const Connect = () => {
    const router = useRouter()

    return (
        <div className="max-w-6xl font-Saira m-4">
            <div className="">
                <h1 className="text-6xl">
                    Connect
                </h1>
                <p className="text-4xl mt-5">
                    connect me on <span onClick={() => router.push('https://twitter.com/AbhayPrajapati_')} className='nametitle'>Twitter</span> 👋, your welcome.
                </p>
            </div>
        </div>
    )
}

export default Connect