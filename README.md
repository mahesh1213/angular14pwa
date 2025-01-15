# Angularpwa

https://incedoinc.zoom.us/j/99463083613

https://incedoinc.zoom.us/j/4524607215

https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDkyNTIzYjktYTlkNi00NWRjLWFhZmMtYTE3OTllNDdiMTkx%40thread.v2/0?context=%7b%22Tid%22%3a%2218791e17-6159-4f52-a8d4-de814ca8284a%22%2c%22Oid%22%3a%22a42fa20b-afcd-4a73-81e2-827586c2c33f%22%7d


https://teams.microsoft.com/l/meetup-join/19%3ameeting_MWIyMTE1NTYtN2I3Zi00NDkzLWJmNzUtNjczZTM2ODUzODZm%40thread.v2/0?context=%7b%22Tid%22%3a%22667ede8d-b2c1-4471-88e7-8874a306811e%22%2c%22Oid%22%3a%221e98a5d7-5a23-4645-97d9-be5a33d783cd%22%7d

https://griddynamics.zoom.us/j/92344950812?pwd=bDkQ0btNvi5I1NHkbqKMi648JG21xi.1

 /*** L1 Round js questions***/
 
 1) let and const with examples.
 2) Shallow and Deep copy with examples with nested object.
 3) sort array of elements with numbers without build method.
 4) let name = "ishan guptha"; //output is "Ishan Guptha"
 5) let arr1 = [20,40,33,55,89,90]; // output filter array elements greaterThan "55" 
 //  and multiple with "2" example output:- [178, 180]
  /*** L1 Round angular questions***/
 6) create service with http request in angular.
 7) pipes with examples. custom pipes.
 8) how to call series api calls in angular.
 9) rxjs operater's.
 10) communation b/w components.
 11) npm and npx difference
 12) package.json and package.lock.json and anglar.json file
 
  /*** L2 Round angular questions***/
  1) based on my project how to use crypto-js for Encrypting Decrypting Data.
  2) what is mico-front end. how to implement
  3) Angular Architecture
  4) how to use ngrx-store (selectors,effects,reducers,actions)
  5) view encaplation
  6) ChangeDetectionStrategy
  7) signals
  8) diff b/w angular signals and rxjs-observables.
  9) @HostBinding and @HostListener
  10) how change styles for angular-material components



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ####################################################################

## pwa 
maxSize - should not greater than "20" in ngsw-config.json. request url to allow
strategy - performance (based on maxAge it will take from cash store).
           freshness - it take based on timeout over it will from cash store.

swupdate use for to get notifaction form service worker. (@angular service-worker).

versionDetectEvent,versionInstallationEvent,versionReadyEvent (new version update from server).

unrecoverable -> when service worker correpted.

## poll for server update 

checkForUpdate,activateUpdate

## push notifaction
 messages,notifationclick,subcribe to current push notifcaion, isenaable

 {
  "notification": {
    "title": "New Notification!",
    "data": {
      "onActionClick": {
        "default": {"operation": "openWindow", "url": "foo"}
      }
    }
  }
}

## to run production
ng build --configuration production

## angular application build dist local
http-server -a localhost -p 8000 -c-1

## json data in local server
json-server --watch db.json -p 5000
