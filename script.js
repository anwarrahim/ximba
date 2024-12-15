

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

    const targetTweetObj = tweetsData.filter(function(tweetData){
      return tweetData.uuid === tweetId
  })[0]

    /*
    Challenge:
    1. When a tweet is liked, it's 'isLiked' property
       should be set to true.
    2. When a tweet is unliked, it's 'isLiked' property
       should be set to false and its 'likes' count
       should be decremented.
    */ 
   if(targetTweetObj.likes){
       targetTweetObj.isLiked = true
       targetTweetObj.likes++
      
   }
    else if(targetTweetObj.isLiked = true) {
        targetTweetObj.isLiked = false
        targetTweetObj.likes--
    }


   console.log(targetTweetObj)


  render()



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

