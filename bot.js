var restify = require('restify');
var botbuilder = require('botbuilder');

var server = restify.createServer();

//Create a server
server.listen(3000,function() {
  console.log('listening on port 3000');
});

//Create a chat connector
var connector = new botbuilder.ChatConnector();

//Create a Chat bot

var bot = new botbuilder.UniversalBot(connector);

server.post('/',connector.listen());

bot.dialog('/',function (session) {
  var clientmessage = session.message.text;
  if(clientmessage == "Hi"|| clientmessage == "Hey"|| clientmessage == "hi"|| clientmessage == "hey"){
    session.send("Hi,I am Bot");
  }else if(clientmessage =="How are you ?"){
    session.send("I am good");
  }else{
    session.send("I dont understand what you said.");
  }
});