const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Question = require('../models/question')

const mongoURI = 'mongodb://localhost/Jeoprady';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('the connection with mongod is established')
});


  const Questions = [{
    Question: 'HTML stands for',
    Answer: 'Hyper Text Markup Language',
    Category: 'Computer Science',
 }, {
    Question: 'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
    Answer: 'Apple',
    Category: 'Computer Science',
 }, {
    Question: 'CPU stands for',
    Answer: 'Central processing unit',
    Category: 'Computer science',
 },{
    Question: 'Which computer hardware device provides an interface for all other connected devices to communicate?',
    Answer: 'motherboard',
    Category: 'Computer science',
 },{
    Question: 'On Twitter the character limit is',
    Answer: '140 characters',
    Category: 'Computer science',
 },{
    Question: 'Which programming language shares its name with an island in Indonesia?',
    Answer: 'Java',
    Category: 'Computer science',
 },{
    Question: 'in computing, LAN stands for',
    Answer: 'Local Area Network',
    Category: 'Computer science',
 },{
    Question: 'This game is called one',
    Answer: 'Uno',
    Category: 'Games',
 },{
    Question: 'Rules say you cant collect $200 without passing go',
    Answer: 'Monopoly',
    Category: 'Games',
 },{
    Question: 'Initially debuted in 2005, this game has earned momentum with children',
    Answer: 'Roblox',
    Category: 'Games',
 },{
    Question: '3in. Dolls that have become popular in 2017',
    Answer: 'LOL Surprise Dolls',
    Category: 'Games',
 },{
    Question: 'The Shoot dance became popular due to this game',
    Answer: 'Fortnite',
    Category: 'Games',
 },{
    Question: 'This golf extraordinaire has an animal for his first name',
    Answer: 'Tiger Woods',
    Category: 'Sports',
 },{
    Question: 'The Serena Williams of this generation',
    Answer: 'Gabby Douglas',
    Category: 'Sports',
 },{
    Question: 'Steph Curry plays for',
    Answer: 'Golden State Warriors',
    Category: 'Sports',
 },{
    Question: 'This boxer is known as Louisvilles son',
    Answer: 'Muhammad Ali',
    Category: 'Sports',
 },{
    Question: 'This game has nine innings and four bases',
    Answer: 'Baseball',
    Category: 'Sports',
 },{
    Question: 'These shoes are referrenced by a number',
    Answer: 'Jordan',
    Category: 'Brands',
 },{
    Question: 'A famous household name, but not socially acceptable',
    Answer: 'Reebok',
    Category: 'Brands',
 },{
    Question: '3 Stripes, All Day I Dream About Sports',
    Answer: 'Adidas',
    Category: 'Brands',
 },{
    Question: 'Initially sold in Walmart and is now a known brand',
    Answer: 'Champion',
    Category: 'Brands',
 },{
    Question: 'This companys slogan is Just Do It',
    Answer: 'Nike',
    Category: 'Brands',
 },{
    Question: 'Initially debuted in 2005, this game has earned momentum with children',
    Answer: 'Roblox',
    Category: 'Games',
 },{
    Question: 'This artist goes by K-Dot',
    Answer: 'Kendrick Lamar',
    Category: 'Music',
 },{
    Question: 'This artist/producer was born in Frankfurt, Germany',
    Answer: 'J. Cole',
    Category: 'Music',
 },{
    Question: 'This artist says “But I got feelings too, just like a lil’ boy, oh lord”',
    Answer: 'NBA Youngboy',
    Category: 'Music',
 },{
    Question: 'Known as America’s sweetheart, from the pop genre',
    Answer: 'Taylor Swift',
    Category: 'Music',
 },{
    Question: 'Juice Wrld could be placed in this genre',
    Answer: 'Emo-rap',
    Category: 'Music',
 },{
    Question: 'This site’s slogan was originally “A place for friends”',
    Answer: 'Myspace',
    Category: 'Social Media',
 },{
    Question: 'This site’s slogan is “capture and share the world’s moments',
    Answer: 'Instagram',
    Category: 'Social Media',
 },{
    Question: 'This site was originally called “Picaboo”',
    Answer: 'SnapChat',
    Category: 'Social Media',
 },{
    Question: 'The original name of this site was “FriendStalker”',
    Answer: 'Twitter',
    Category: 'Social Media',
 },{
    Question: 'This site prompts the user with "Whats on your mind"',
    Answer: 'Facebook',
    Category: 'Social Media',
 }, {
    Question: 'Constantine II won a gold in sailing in 1960; 4 years later he became king of his country',
    Answer: 'Greece',
    Category: 'Final Question',
 },
 {
    Question: 'This team finished the 2001 season with a perfect 16-0 home record in staples center',
    Answer: 'THE LOS ANGELES SPARKS',
    Category: 'Final Question',
 }, {
    Question: 'In 2002 this 4-time olympic gold medalist became the first WNBA player to drunk in a game',
    Answer: 'Lisa Leslie',
    Category: 'Final Question',
 }, {
    Question: 'An unkind tweet: “”Is it me does”” this celtics guard “”look like that turtle? Franklin on Nick jr?',
    Answer: 'Rajon Rondo',
    Category: 'Final Question',
 }, {
    Question: 'Soccer stars Bobby & Jack Charlton were factors when England won its first & only world cup this year',
    Answer: '1966',
    Category: 'Final Question',
 }, {
    Question: 'This style of music is done with vocals not instruments.',
    Answer: 'Acapella',
    Category: 'Music',
 }, {
    Question: 'A xylophone, a piano, and even the bass drum are all included in this family of instruments',
    Answer: 'Percussion',
    Category: 'Music',
 }, {
    Question: 'In 1948 at the age of 21 she attended Juilliard she would go on to become one of the world’s most gifted and famous opera singers',
    Answer: 'Leontyne Price',
    Category: 'Music',
 }, {
    Question: 'Not known for just his drumming skills this artist is also known for being a member of the group “Genesis”',
    Answer: 'Phil Collins',
    Category: 'Music',
 }, {
    Question: 'These brothers formed this group before Charlie Wilson went on to a very successful solo career.',
    Answer: 'The Gap Band',
    Category: 'Music',
 }, {
    Question: 'Cosmetics are easy breezy according to this Coty company',
    Answer: 'Covergirl',
    Category: 'Brands',
 }, {
    Question: '501s 505s and now tennis shoes are all apart of this company',
    Answer: 'Levi',
    Category: 'Brands',
 }, {
    Question: 'According to J.M. Smuckers The best part of waking up is this in your cup',
    Answer: 'Folgers',
    Category: 'Brands',
 }, {
    Question: 'The first Nike LeBron shoe was made in this year',
    Answer: '2003',
    Category: 'Brands',
 },{
    Question: 'This $ symbol is the symbol for cash in javascript the symbol is this',
    Answer: 'Cache',
    Category: 'Computer Science'
}, {
    Question: 'A business that needs advise on design, installation, and usage for their business should contact one of these',
    Answer: 'An IT Consultant',
    Category: 'Computer Science'
}, {
    Question: 'This social media site social networking site allowed you a space to meet people',
    Answer:'MySpace',
    Category: 'Social Media'
}, {
    Question:'This social media site allowed you to instantly post ya photos an American photo and video-sharing social networking service owned by Facebook, Inc.',
    Answer: 'Instagram',
    Category: 'Social Media'
},{
    Question: 'This social media site allowed you to connect with family and friends. An online social media and social networking service founded by Mark Zuckerberg',
    Answer: 'Facebook',
    Category: 'Social Media'
},{
    Question:'This site was created for blogging',
    Answer: 'Twitter',
    Category: 'Social Media'
},{
    Question: 'Was created as a multimedia app',
    Answer: 'Snapchat',
    Category: 'Social Media'
},{	
    Question: 'What sport is Micheal Jordan known for?',
    Answer: 'Basketball',
    Category: 'Sports'
}, {
    Question: 'What sport is Joe Montana known for?',
    Answer: 'Football',
    Category:'Sports'
}, {
    Question: 'What sport are these tournaments know for: Australian Open, French Open, Wimbledon, and US Open.',
    Answer: 'Tennis',
    Category: 'Sports'
}, {
    Question: 'Who is Venus and Serena Williams',
    Answer: 'Tennis players',
    Category: 'Sports'	
}, {
    Question: 'In what sport is Tiger Woods known for?',
    Answer:'Golf',
    Category: 'Sports'
}, {
    Question: 'the Masters Tournament, the U.S. Open, The Open Championship and the PGA Championship are played in this sport',
    Answer: 'Golf',
    Category: 'Sports'	
}, {
    Question: 'Louisville makes bats for this sport',
    Answer: 'Baseball',
    Category: 'Sports'	
}, {
    Question: 'In what sport is Wayne Gretzky know for?',
    Answer: 'Hockey',
    Category: 'Sports'
}





];

Question.collection.insert(Questions, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection", docs);
    }
  });