import { Routes } from '@angular/router';
import { VendorMaster } from './components/vendor-master/vendor-master';
import { Variables } from './components/variables/variables';
import { For } from './components/for/for';
import { Class } from './components/class/class';
import { Signal } from './components/signal/signal';
import { GetApi } from './components/get-api/get-api';
import { EmployeeList } from './components/employee-list/employee-list';

export const routes: Routes = [
    {
        path: 'variables',
        component: Variables
    },
    {
        path: 'for',
        component: For
    }, {
        path: 'class',
        component: Class
    }, {
        path: 'signal',
        component: Signal
    }, {
        path: 'get-api',
        component: GetApi
    }, {
        path: 'vendor',
        component: VendorMaster
    }
    , {
        path: 'employee',
        component: EmployeeList
    }
    ,
    {
        path: '',
        pathMatch: "full",
        redirectTo: 'vendor'

    }
];
