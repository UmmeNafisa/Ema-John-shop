import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';
import { getAnalytics } from "firebase/analytics";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
    //     const analytics = getAnalytics(app);
}

export default initializeAuthentication;

/*
steps for Authentication
-------------------------------
1. initial setup
1.firebase: create project
1. create web app
3. get configuration
4. initialize firebase
5.Enable auth method

step-2
1. Create Login Component
2. Create Register component
3.create Route for login & registration

--------------------------------
step-3
1.step up sign in method
2.set-up sign out method
3. user state
4. special observer
5.return nessecary methods and states from use firebase

---------------------------
step-4
1.create a auth context
2.create context provider
3.use Auth provider
4. create useAuth Hook
 */