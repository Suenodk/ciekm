import { Routes } from '@angular/router';
import { LootjesPage } from './lootjes-page/lootjes-page';
import { Home } from './home/home';
import { Lijstje } from './lijstje/lijstje';
import { Login } from './login/login';

export const routes: Routes = [

        { path: '', component: Home }, 
        {path: 'lootjes', component: LootjesPage},
        {path: 'lijstje', component: Lijstje},
        {path: 'login', component: Login}
];
