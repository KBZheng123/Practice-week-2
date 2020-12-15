function exercise1(n)
{
    var Str = n.toString();
    var Str2 = [];
    for (var i= Str.length; i >= 0; i--)
    {
        Str2.push(Str[i]);
    }
    Str2 = Str2.join("");
    Str2 = parseInt(Str2);
    return Str2;
}

function exercise2(m)
{
    var Pal = m.toString();
    var Pal2 = [];
    for (var i= Pal.length; i >= 0; i--)
    {
        Pal2.push(Pal[i]);
    }
    Pal2 = Pal2.join("");
    result = Pal2.localeCompare(Pal);
    if (result == 0)
    {
        console.log(m + " " + "is a palindrome");
    }
    else {
        console.log(m + " " + "is not a palindrome");
    }
}


    function exercise3 (s) {
        list_of_strings = new Array();
        for(i=0;i<s.length;i++) {
            for(j=i+1;j<s.length+1;j++) {
                list_of_strings.push(s.slice(i, j));
            }
        }
        return list_of_strings;
     }
     
     function exercise4 (a)
     {
        return a.split("").sort().join("");
     }


     function exercise5 (c)
    {
        var splitstring = c.split(" ");
        var newstring = []
        for (i = 0; i < splitstring.length; i ++)
        {
            newstring[i] = splitstring[i][0].toUpperCase() + splitstring[i].substring(1);
        }
        return newstring.join(' ');
    }

    function exercise6 (z)
    {
        var splitstring = z.split(' ');
        var currentlongest = splitstring[0];
        for (i = 0; i < splitstring.length; i ++)
        {
            if (splitstring[i].length > currentlongest)
            {
                splitstring[i] = currentlongest;
            }
        }
        return currentlongest;
    }

    function exercise7(v)
    {   
        return v.match(/[aeiou]/gi).length;
    }

    function exercise8(p)
    {  
        if ((p / p == 1 || p / 1 == p) && p % 2 !== 0 || p == 1)
        {
            console.log(p + " is a prime number")
        }
        else if (p == 2) {
            console.log(p + " is a prime number")
        }
        else 
        {
            console.log(p + " is not a prime number")
        }
    }


console.log(exercise1(123));
console.log(exercise2("GOG"));
console.log(exercise3("abcdef"));
console.log(exercise4("aagagoietweti"));
console.log(exercise5("Kazahkstan you very nice place. from plain to tarasek to northern fence of jew town"));
console.log(exercise6("Kazahkstan you very nice place. from plain to tarasek to northern fence of jew town"));
console.log(exercise7("Kazahkstan you very nice place. from plain to tarasek to northern fence of jew town"));
console.log(exercise8(12));