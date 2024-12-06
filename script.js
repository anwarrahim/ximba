/*
Challenge:
1. Put all of the data in its own file called
   data.js, and export it back into index.js.
   Make any changes to index.html that are
   necessary to make this work.
2. Log out tweetsData.
*/

import { tweetsData } from "/data.js"


const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")

tweetBtn.addEventListener('click', function(){

    console.log(tweetInput.value)
    tweetInput.value = ' '

})

function getFeedHtml(){
    let feedHtml = ` `
    for(let tweetData of tweetsData) {

        feedHtml +=  `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src= "${tweetData.profilePic}" alt="${tweetData.handle}" class="profile-pic"/>
                    <div>
                        <p class="handle">${tweetData.handle}</p>
                        <p class="tweet-text">${tweetData.tweetText}</p>
                        <div class="tweet-details">
                    <span class="tweet-detail">
                        ${tweetData.replies.length}
                 
                    </span>
                            <span class="tweet-detail">
                        ${tweetData.likes.length}
                    </span>
                            <span class="tweet-detail">
                        ${tweetData.replies.length}
                    </span>
                        </div>
                    </div>
                </div>
        </div>`

    }
}

