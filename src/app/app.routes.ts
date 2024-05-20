import { Routes } from '@angular/router';

import { ProductosComponent } from './component/productos/productos.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalleProductosComponent } from './component/detalle-productos/detalle-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "productos", component: ProductosComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "contactos", component: ContactosComponent },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent },
    { path: "usuarios", component: UsuariosComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
