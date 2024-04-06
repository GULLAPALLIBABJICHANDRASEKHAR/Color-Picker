// Function to generate random hex color
function colorChange(){
    // hex-values
    let range="0123456789ABCDEF";
    let hex_value='#';

    for(i=0; i<6; i++){
        let rand=Math.floor(Math.random()*range.length);
        hex_value+=range[rand];
    }
    // Printig the color name
    document.getElementById("color-name").innerHTML=hex_value;
    // Applying the color to background-color
    document.body.style.backgroundColor=hex_value;
    // Applying the color to the text in color-name id
    document.getElementById("color-name").style.color=hex_value;
    // Applying the color to the text in heading id
    document.getElementById("heading").style.color=hex_value;
}