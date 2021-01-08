class Form{
constructor(){

}

display(){
    var title = createElement('h2');
    title.html("The Crew");
    title.position(200,20);
    var input = createInput("name");
    var button = createButton("play");
    var greeting = createElement('h3');
    input.position(200,100);
    button.position(200,200);
    button.mousePressed(function(){

        input.hide();
        button.hide();
        
        var name  = input.value

        playerCount+=1;
        player.update(name);
        pplayer.updateCount(playerCount)
        greeting.html("Hello!"+name);
        greeting.position(300,200)
    });
}

}