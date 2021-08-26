
var db = firebase.firestore()

function add_data(){
    var user_name = document.getElementById("appointment_name").value;
    var user_department = document.getElementById("appointment_department").value;
    var user_email = document.getElementById("appointment_email").value;
    var user_date = document.getElementById("appointment_date").value;
    var user_time = document.getElementById("appointment_time").value;
    var user_phone = document.getElementById("appointment_phone").value;

    // Add a new document in collection "cities"
    db.collection('all data/' + user_department + '/patient').doc(user_email).set({
        name: user_name,
        date: user_date,
        time:user_time,
        phone: user_phone,
    })
    .then(() => {
        console.log("Document successfully written!");

    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        
    });

    
}
