function entername(){
    var username = document.getElementById("Name").value;

    if(username != "") {
        localStorage.setItem("Name", username)
        location.href = "Play.html"
    }
}

function checkanswer(qc){
    for(var i = 0; i < qc.length; i++){
        if(qc[i].checked) return qc[i].value;
    }
}


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("getname").innerHTML = localStorage.getItem("Name");

    const form = document.getElementById('questionAnswer');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        var qc1 = document.getElementsByName("1");
        var qc2 = document.getElementsByName("2");
        var qc3 = document.getElementsByName("3");
        var qc4 = document.getElementsByName("4");

        var q1 = checkanswer(qc1);
        var q2 = checkanswer(qc2);
        var q3 = checkanswer(qc3);
        var q4 = checkanswer(qc4);
        
        if(q1 == null || q2 == null || q3 == null || q4 == null) alert("Please complete the question!!");
        else {
            const a4 = document.querySelector('input[name="4"]:checked').value;

            if(a4 == "อยาก") location.href = 'endwant.html'
            else if(a4 == "ไม่อยาก") location.href = 'enddont.html'
        }
    });
});

