import { Routes } from '@angular/router';
import { LootjesPage } from './lootjes-page/lootjes-page';
import { Home } from './home/home';

export const routes: Routes = [

        { path: '', component: Home }, 
        {path: 'lootjes',
        component: LootjesPage}
];
