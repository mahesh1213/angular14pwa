# Angularpwa

https://incedoinc.zoom.us/j/99463083613
https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDkyNTIzYjktYTlkNi00NWRjLWFhZmMtYTE3OTllNDdiMTkx%40thread.v2/0?context=%7b%22Tid%22%3a%2218791e17-6159-4f52-a8d4-de814ca8284a%22%2c%22Oid%22%3a%22a42fa20b-afcd-4a73-81e2-827586c2c33f%22%7d

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
