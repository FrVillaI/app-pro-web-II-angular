import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductosComponent } from './component/productos/productos.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalleProductosComponent } from './component/detalle-productos/detalle-productos.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "productos", component: ProductosComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "contactos", component: ContactosComponent },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
