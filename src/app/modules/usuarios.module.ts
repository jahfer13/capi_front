import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
  ]
})
export class UsuariosModule { }
