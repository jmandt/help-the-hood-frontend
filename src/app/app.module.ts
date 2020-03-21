import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomePageModule} from './welcome/welcome.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {IonicStorageModule} from '@ionic/storage';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {AuthModule} from './auth';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {AuthService} from './services/auth';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AuthModule,
        IonicStorageModule.forRoot(),
        NgxsModule.forRoot([]),
        WelcomePageModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthService,
        AngularFireAuthGuard,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
