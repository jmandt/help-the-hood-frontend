import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {auth} from 'firebase/app';
import {CoreService} from './../core/core.service';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class AuthService {

    constructor(
        public afAuth: AngularFireAuth,
        public coreService: CoreService,
        public router: Router,
        public afs: AngularFirestore
    ) {
    }

    doRegister(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                    firebase.auth().currentUser.updateProfile({displayName: value.firstName + ' ' + value.lastName});
                    const userDoc = this.afs.doc(
                        'user/' + res.user.uid
                    );
                    userDoc
                        .set({
                                name: value.firstName + ' ' + value.lastName,
                                email: value.email,
                                profileImageUrl: '',
                                lastLogin: new Date(),
                                dateCreated: new Date(),
                                emailVerified: res.user.emailVerified
                            },
                            {
                                merge: true
                            }
                        );
                }, err => reject(err));
        });
    }

    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                }, err => reject(err));
        });
    }

    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                this.afAuth.auth.signOut();
                resolve();
            } else {
                reject();
            }
        }).then(() => this.coreService.showToast('Logout Successfull', 'green'))
            .then(() => this.router.navigate(['/login']))
            .catch(() => this.coreService.showToast('Wasnt able to log you out', 'red'));
    }

    sendResetEmail(email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    googleLogin() {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    facebookLogin() {
        return this.afAuth.auth.signInWithPopup(
            new auth.FacebookAuthProvider()
        );
    }

    saveUser(res) {
        const userDoc: AngularFirestoreDocument = this.afs.doc(
            'user/' + res.user.uid
        );
        userDoc.set(
            {
                name: res.user.displayName,
                profileImageUrl: res.user.photoURL,
                email: res.user.email,
                emailVerified: res.user.emailVerified,
                dateCreated: new Date(),
                lastLogin: new Date()
            },
            {merge: true}
        );
    }

    setLastLogin(res) {
        const userDoc: AngularFirestoreDocument = this.afs.doc(
            'user/' + res.user.uid
        );
        userDoc.set(
            {
                lastLogin: new Date(),
                emailVerified: res.user.emailVerified
            },
            {merge: true}
        );
    }
}
