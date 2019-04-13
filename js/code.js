
// Globals.
var i = 0;
var strings = ["Will's Interactive Mod Repository", "Click to see all downloadable content and links", "Click to close context menu"];
var checkstate = 0; // Boolean for loadBar function, checks if mods bar is active.

function type()
{
    if (i < strings[0].length)
    {
        document.getElementById("myname").innerHTML += strings[0].charAt(i);
        i++;
        setTimeout(type, 50)      
    }   
    document.getElementById("mydesc").innerHTML = strings[1];
}

loadBar = function() {
       
    if (checkstate == 0) // menu opened
    {
        $("#modBar").fadeIn(500, "swing");
        document.getElementById("content").style.marginLeft = 150 + "px";
        document.getElementById("mydesc").innerHTML = strings[2];
        checkstate = 1;
        return;
    } 

    if (checkstate == 1) // menu closed
    {
        $("#modBar").fadeOut(500, "swing");
        
        document.getElementById("content").style.marginLeft = 0 + "px";

        document.getElementById("mydesc").innerHTML = strings[1];
        checkstate = 0;
        return;
    }

}
