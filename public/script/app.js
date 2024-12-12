$('#idEntre').on('change', () => {
    let id = document.querySelector('#idEntre').value;
    $.ajax({
        type: "POST",
        data: "id=" + id,
        //url: "index.php?p=listeDirect",
         url: "views/listeDirection.php",
        // url: "./js/listeDirection.php",
        success: function(data)  {
            //console.log(data);
            //alert(data);
            document.querySelector('#idDirect').innerHTML=data;
        }
    });
})