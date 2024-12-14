

import { tweetsData } from "./data.js"


const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")

tweetBtn.addEventListener('click', function(){

    console.log(tweetInput.value)
    tweetInput.value = ' '

})
document.addEventListener('click', function(e){
    if (e.target.dataset.like){

        handleLikeClick(e.target.dataset.like)
    }
   
   
})

function handleLikeClick(tweetId){
  console.log(tweetId)
    /*
   Challenge:
   1. Iterate over tweetsData and use the uuid 
      saved in tweetId to identify the liked
      tweet's object. Save that object to a 
      new const called 'targetTweetObj'.
   ⚠️ targetTweetObj should hold an object, NOT
      an array.
   2. Increment targetTweetObj's 'likes' count 
      by 1.
   3. Log out targetTweetObj.
   */
    const targetTweetObj = tweetsData.filter(function(tweetData){
        if(tweetData.uuid == tweetId){
        targetTweetObj.forEach(tweetData)
        }
  })



}

function getFeedHtml(){
    let feedHtml = ` `
    tweetsData.forEach(function(tweetData)
        {

            feedHtml +=  `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src= "${tweetData.profilePic}" alt="${tweetData.handle}" class="profile-pic"/>
                    <div>
                        <p class="handle">${tweetData.handle}</p>
                        <p class="tweet-text">${tweetData.tweetText}</p>
                        <div class="tweet-details">
                    <span class="tweet-detail">
                     <i class="fa-regular fa-comment-dots" data-reply ="${tweetData.uuid}"></i>  
                        ${tweetData.replies.length}
                    </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-heart" data-like = "${tweetData.uuid}"></i>
                        ${tweetData.likes}
                    </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" data-retweet = "${tweetData.uuid}"></i>
                        ${tweetData.retweets}
                    </span>
                        </div>
                    </div>
                </div>
        </div>`

        }
    )
    return feedHtml
}

function render(){
     document.getElementById('feed').innerHTML =  getFeedHtml()
}
render()

