

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
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    // else if (e.target.dataset.reply){
    //     handleCommentClick(e.target.dataset.reply)
    // }

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
   if(targetTweetObj.isLiked){
       targetTweetObj.likes--
  
   }
    else{
        targetTweetObj.likes++
    }
// changine false into true and viseversa
   targetTweetObj.isLiked = !targetTweetObj.isLiked


  render()

}

function handleRetweetClick(tweetId){
 
    // Now i have to filter this to check the clicked id is in which tweet data...

    const targetTweetObj = tweetsData.filter(function(tweetData){
       return tweetData.uuid === tweetId
    })[0]
   
    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--
    }
    else {
        targetTweetObj.retweets++
    }

    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted



   render()
}

function handleReplyClick(replyId){
    const targetTweetObj = tweetsData.filter(function(tweetData){
        return tweetData.uuid === replyId
        
    })[0]
    console.log(targetTweetObj)
}

function getFeedHtml(){
    let feedHtml = ` `
    tweetsData.forEach(function(tweetData){
       
        let likeIconClass = ''
        let retweetIconClass = ''
        if (tweetData.isLiked) {
            likeIconClass = 'liked'
        }
        if (tweetData.isRetweeted){
            retweetIconClass = 'retweeted'
        }



        let repliesHtml = ` `

        if (tweetData.replies.length > 0) {

            tweetData.replies.forEach(function(reply){
                repliesHtml += `<div class="tweet-reply">
                <div class="tweet-inner">
                    <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
            </div>`
            })
          
            /*
            Challenge:
            1. If a tweet has replies, iterate through the replies
               and wrap each one in the HTML template provided below. 
               Make sure to replace words in UPPERCASE with data from 
               the tweet. On each iteration, add this HTML to repliesHtml.
               
            <div class="tweet-reply">
                <div class="tweet-inner">
                    <img src="PROFILE PIC" class="profile-pic">
                        <div>
                            <p class="handle">HANDLE</p>
                            <p class="tweet-text">TWEET TEXT</p>
                        </div>
                    </div>
            </div>
            */
        }
          

            feedHtml +=  `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src= "${tweetData.profilePic}" alt="${tweetData.handle}" class="profile-pic"/>
                    <div>
                        <p class="handle">${tweetData.handle}</p>
                        <p class="tweet-text">${tweetData.tweetText}</p>
                        <div class="tweet-details">
                    <span class="tweet-detail">
                     <i class="fa-regular fa-comment-dots"  data-reply ="${tweetData.uuid}"></i>  
                        ${tweetData.replies.length}
                    </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconClass}"  data-like = "${tweetData.uuid}"></i>
                        ${tweetData.likes}
                    </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet = "${tweetData.uuid}"></i>
                        ${tweetData.retweets}
                    </span>
                        </div>
                    </div>
                </div>
             <div id="replies-${tweetData.uuid}">
        ${repliesHtml}
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

