const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Question = require('./models/question')

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
 }

];
 Question.insertMany(Questions).then((docs)=>{
   console.log(docs);
 });