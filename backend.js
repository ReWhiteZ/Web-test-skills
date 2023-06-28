function entername(){
    var username = document.getElementById("Name").value;

    if(username != "") {
        location.href = "Play.html"
        //document.getElementById("Name").innerHTML = username;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('questionAnswer');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const q4 = document.querySelector('input[name="4"]:checked').value;

        if(q4 == "อยาก") location.href = 'endwant.html'
        else location.href = 'enddont.html'
    });
});

