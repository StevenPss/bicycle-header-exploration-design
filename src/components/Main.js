import React from 'react'
import BicycleImg from '../static/bike.png';

function Main() {
    return (
        <main className="main relative z-10 max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="main-content flex flex-col sm:flex-row justify-between items-center">
                {/**Text & call to action */}
                <div className="main-header flex flex-col w-80 order-2 sm:order-1">
                <h1 className="text-4xl">Next Generation Electric Bicycle Concept</h1>
                <button className="main-btn bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-1/2 rounded mt-12 mb-12">
                    Order Now
                </button>
                <div className="mb-3">
                    <a href="#explore" title="Explore More" className="inline-flex">
                    Explore More
                    <svg className="ml-4" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </a>
                </div>
                </div>
                {/**Bicycle image */}
                <div className="main-image order-1 sm:order-2">
                <img src={BicycleImg} alt=""/>
                </div>
            </div>
        </main>
    )
}

export default Main
