let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Split strings to individual words
let storyWords = story.split(' ');
//console.log(storyWords.length)

let betterWords = storyWords.filter(words => {return !unnecessaryWords.includes(words)})


let countReally =0;
let countVery =0;
let countBasically  = 0;


for (let i=0;i < betterWords.length; i++) {
  if (betterWords[i] === 'really') {
    countReally += 1;
  } else if (betterWords[i] === 'very') {
    countVery += 1;
  } else if (betterWords === 'basically') {
    countBasically += 1;
  }
}

//console.log(countReally)
//console.log(countVery)
//console.log(countBasically)

// how many sentences are in the paragraph
let countSentence = 0;
for (let sentence of betterWords) {
  if (sentence[sentence.length-1] === '.' || sentence[sentence.length-1] === '!') {
    countSentence += 1;
  }
}
//console.log(countSentence)


// logging items to console
const wordLog = (wordCount, sentCount, overCount)=> {
  console.log('Word count: ', wordCount.length);
  console.log('Sentence count: ', sentCount);
  console.log('Number of overused word appearance', overCount);
}

wordLog(storyWords, countSentence,countReally);

const finalStory = betterWords.join(' ');
console.log(finalStory);
