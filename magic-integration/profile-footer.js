function magicReadyListener(event) {
  const { magic, idToken, userMetadata, oauth } = event.detail;
  let emailAddress = document.getElementById("emailAddress");
  //   let publicAddress = document.getElementById("publicAddress");

  emailAddress.innerHTML = userMetadata.email;
  console.log("Your public address: ", userMetadata.publicAddress);
  getUser();
}

window.addEventListener("@magic/ready", magicReadyListener);
