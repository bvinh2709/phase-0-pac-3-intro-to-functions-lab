function shout(string)
{
    string = "Hello";
    return string.toUpperCase();
}

function whisper(string)
{
    string = "Hello";
    return string.toLowerCase();
}

function logShout(string)
{
    string = "Hello";
    console.log(string.toUpperCase());
}

function logWhisper(string)
{
    string = "Hello";
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string)
{
    if(string === whisper(string))
        return "I can\'t hear you!";
   
    else if(string === shout(string))
        return "YES INDEED!";

    else if(string === 'Let\'s have dinner together!')
        return "I would love to!";
}
    