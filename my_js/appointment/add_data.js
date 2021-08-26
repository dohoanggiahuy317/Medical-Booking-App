
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
        TweenMax.to('#booking_form', 0, {display: 'none', ease: Power1.easeInOut});
        TweenMax.to('#after_book', 0, {display: 'flex', ease: Power1.easeInOut});
        TweenMax.to('#after_book', 0.3, {opacity: 1, ease: Power1.easeInOut});
        console.log("Document successfully written!");
        

    })
    .catch((error) => {
        alert('Error');
        console.error("Error writing document: ", error);
       
        
    });

    
}
