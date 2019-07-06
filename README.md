# dynamic-form
from angular dynamic form sample

## 2019/7/6
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
