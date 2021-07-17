import { Component, OnInit } from '@angular/core';
import { User } from '../../users';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: User | any;
  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(){
    this.service.readUsers().subscribe(data => {
      this.usuarios = data;
      
    })
  }

}
