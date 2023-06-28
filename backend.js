function entername(){
    var username = document.getElementById("Name").value;

    if(username != "") {
        localStorage.setItem("Name", username)
        location.href = "Play.html"
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("getname").innerHTML = localStorage.getItem("Name");

    const form = document.getElementById('questionAnswer');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const q4 = document.querySelector('input[name="4"]:checked').value;

        if(q4 == "อยาก") location.href = 'endwant.html'
        else location.href = 'enddont.html'
    });
});

