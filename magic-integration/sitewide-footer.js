/*
From: https://magic.link/posts/magic-webflow

GENERAL SITE FOOTER
 */

/** CONSTS -- these are variables that are fixed + unchanging **/

const loginBtnId = "login-btn";
const profileBtnId = "profile-btn";
const exploreBtnId = "explore-btn";
const logoutBtnId = "logout-btn";
const privatePages = [
  "/profile",
  "/explore",
  "/project",
  // '/' // We don't want the home page or project pages to be private.
];

const publicPages = ["/login", "/"];

/** HANDLER FUNCTIONS -- these functions describe how to handle particular scenarios **/
const handleRedirectFromUnauthedPage = () => {
  window.location.replace("/");
};
const handleHideLoginElements = () => {
  // Hide any elements on the page that should not be visible to logged in users.
  const loginLink = document.getElementById("login-btn");

  if (loginLink && loginLink.style) loginLink.style.display = "none";
};
const handleRedirectToLogin = () => {
  window.location.replace("/login");
};
const handleHideAuthedElements = () => {
  // Hide any elements that should not be visible to unauthenticated users.
  const profileLink = document.getElementById("profile-btn");
  const logoutLink = document.getElementById("logout-btn");

  if (profileLink && profileLink.style) profileLink.style.display = "none";

  if (logoutLink && logoutLink.style) logoutLink.style.display = "none";
};

/** getUser checks if there's a logged in user and then updates the app state accordingly. **/
const getUser = async () => {
  const currentPath = window.location.pathname;
  const isLoggedIn = await magic.user.isLoggedIn();

  if (isLoggedIn) {
    if (publicPages.includes(currentPath)) {
      handleRedirectFromUnauthenticatedPage();
    } else {
      handleHideLoginElements();
    }
  } else {
    if (privatePages.includes(currentPath)) {
      handleRedirectToLogin();
    } else {
      handleHideAuthedElements();
    }
  }
};
