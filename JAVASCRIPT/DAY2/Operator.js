let userInput = prompt("Enter a day");
switch (userInput) {
    case "monday":
    case "tuesday":
    {
        console.log("Football")
        break;
    }
    case "wednesday":
    case "thursday":
    {
        console.log("Cricket");
        break;
    }
    case "friday":
    {
        console.log("Basketball");
        break;
    }
    case "saturday":
    {
        console.log("Hockey");
        break;
    }
    case "sunday":
    {
        console.log( "Holiday");
        break;
    }
    default:
        {
        console.log("Enter a valid day");
        
        break;
        }
}