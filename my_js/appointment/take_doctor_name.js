(function(){

    var db = firebase.firestore()

    db.collection("doctor list").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
    
            //Creat div for each pation
            let option = document.createElement('option');
            
            // create a div name
            
            var docRef = db.collection("doctor list").doc(doc.id);
            docRef.get().then(function(doc) {
            //gives specific field 
                var name=doc.get('name');
                option.innerHTML = name;
            })

            // add div to the document
            document.getElementById('appointment_department').appendChild(option);
    
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
    

})()



