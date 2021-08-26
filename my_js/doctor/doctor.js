
// var doctor_id = prompt('what is your id: ');
function take_id(){
    var doctor_id = document.getElementById('doctor_id').value;
// (function(){

    var divsToRemove = document.getElementsByClassName("appointment-list");
    for (var i = divsToRemove.length-1; i >= 0; i--) {
    divsToRemove[i].remove();
    }

    var db = firebase.firestore()

    db.collection('all data/' + doctor_id + '/patient/').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
    
            //Creat div for each pation
            let div = document.createElement('div');
            div.className = 'appointment-list';
            
            // create a div name
            let p = document.createElement('p');
            var docRef = db.collection('all data/' + doctor_id + '/patient/').doc(doc.id);
            docRef.get().then(function(doc) {
            //gives specific field 
                var name=doc.get('name');
                p.innerHTML = name;
            })
            div.appendChild(p);
    
            //create a patient id
            let smallerDiv = document.createElement('div')
            //Take the name of field
            var docRef = db.collection('all data/' + doctor_id + '/patient/').doc(doc.id);
            docRef.get().then(function(doc) {
            //gives specific field 
                var department = doc.get('department');
                var date = doc.get('date');
                var time = doc.get('time');
                var phone = doc.get('phone')
                smallerDiv.innerHTML = '<h5><i class="far fa-calendar-check"></i>' + date + '</h5>' + 
                                        '<h5><i class="fas fa-clock"></i>' + time + '</h5>' + 
                                        // '<h5>' + department + '</h5>' +
                                        '<h5><i class="fas fa-envelope"></i>' + doc.id + '</h5>' +  
                                        '<h5><i class="fas fa-phone-square-alt"></i>' + phone + '</h5>';
            })
            //add details to div
            smallerDiv.className = 'patient-details'
            div.appendChild(smallerDiv)
            
            // add div to the document
            document.getElementById('put-patient').appendChild(div);
    
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
    });
// })()


}