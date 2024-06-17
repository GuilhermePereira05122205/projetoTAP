const firebaseConfig = {
    apiKey: "AIzaSyD_y4yDUMqxIR_ZAlHN2JuqNt1UD59kJtk",
    authDomain: "projetotap-7a77c.firebaseapp.com",
    projectId: "projetotap-7a77c",
    storageBucket: "projetotap-7a77c.appspot.com",
    messagingSenderId: "133650377996",
    appId: "1:133650377996:web:caf5372abb89c1d5892d29",
    measurementId: "G-FPD2HLPGDJ"
  };

  const app = firebase.initializeApp(firebaseConfig);

  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/login',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    // Terms of service url.
    tosUrl: '/termos',
    // Privacy policy url.
    privacyPolicyUrl: '/privacidade'
  });
