function tryGetUser() {
  if (typeof getUser === "function") {
    getUser();
  } else {
    console.error("getUser fn not present", getUser);
  }
}
tryGetUser();
