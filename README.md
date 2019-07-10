# dynamic-form
from angular dynamic form sample

## to do or undone

* dynamic control for multiple records (table)
*  [child routes](https://www.youtube.com/watch?v=ZoeZxpfTCXk&t=284s)
* need to add standard form items for bootstrap, refer to [Bootstrap Form Inputs](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp), including
  * label
  * textbox
  * textarea
  * listbox
  * combobox
  * checkbox
  * radio button
  * button
  * grid/table
* add [electron](https://electronjs.org/docs/tutorial/first-app#installing-electron)

* [ckeditor](https://ckeditor.com/ckeditor-4/) with [base64 paste image plugin](https://ckeditor.com/cke4/addon/pastebase64)
* [ace](https://ace.c9.io), code editor
* markdown doc editor ([woofmark](https://github.com/bevacqua/woofmark))
* [electron vs. nodejs ipc example](https://electronjs.org/docs/api/ipc-main)
* node read/write json, including application config
* node ipc rust
  * via [redis pub sub](https://redis.io/topics/pubsub) ([node](https://github.com/NodeRedis/node_redis) and [rust](https://github.com/mitsuhiko/redis-rs))
  * via named pipe ([node](https://stackoverflow.com/questions/11750041/how-to-create-a-named-pipe-in-node-js) and rust unavailable yet)

## 2019/7/10
1. add few more files

## 2019/7/9
1. add isenabled, isvisible to form control

## 2019/7/8
1. add [angular routing](https://www.youtube.com/watch?v=Nehk4tBxD4o&t=75s) to existing project
need to modify app.module.ts and add app-routing.module.ts, refer to [Angular 2 Cli adding routes to existing project](https://stackoverflow.com/questions/42039988/angular-2-cli-adding-routes-to-existing-project)
can also use angular
```
ng g c department-list -it -is
```

## 2019/7/6
1. from angular dynamic form sample
refer to [angular dynamic form](https://angular.io/guide/dynamic-form)
1. add bootstrap
refer to [stackoverflow:Angular 4: How to include Bootstrap?](https://stackoverflow.com/questions/43557321/angular-4-how-to-include-bootstrap)
```
npm install --save bootstrap
```
update angular.json
```
"styles": [
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",
   "styles.css"
],
```
2. add ngx

refer to:

 [valor-software/ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md)
 
 [ngx-bootstrap documentation](https://valor-software.com/ngx-bootstrap/#/documentation)

 ```
 npm install ngx-bootstrap bootstrap --save
 ```
Open src/app/app.module.ts and add:
```
import { AlertModule } from 'ngx-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule.forRoot(), ... ],
   ...
})

```
3. add ngx components
```
ng add ngx-bootstrap  --component alerts
ng add ngx-bootstrap  --component buttons
ng add ngx-bootstrap  --component datepicker
ng add ngx-bootstrap  --component dropdowns
```
4. a few error to make up
```
npm i jquery@1.9.1 --save
npm install --save-dev @angular-devkit/build-angular
```
