
    function login() {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      auth.signInWithEmailAndPassword(email, password)
        .then((cred) => {
          console.log("Logged in:", cred.user.email);

          db.collection('BakeryCustomers').doc(cred.user.uid).get()
            .then(doc => {
              if (doc.exists && doc.data().isAdmin === true) {
                window.location.href = "admin.html";
              } else {
                window.location.href = "store.html";
              }
            });
        })
        .catch((error) => {
          console.error(error.code, error.message);
          alert(error.message); // SHOW REAL ERROR
        });
    }
function GoBack(){
  window.location.href = "index.html";
}
