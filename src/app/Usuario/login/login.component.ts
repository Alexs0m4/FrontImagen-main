import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string=""                                                                                                                                                                                                                                                          
  clave:string=""

  constructor(public usuarioService: UsuarioService, private router:Router ) {}


  ngOnInit(): void {
  }


  //INICIAR SESION
  login(){
    const usuarios ={usuario:this.usuario, clave: this.clave}
    this.usuarioService.login(usuarios).subscribe(data => {
      console.log(data);
    });
    
  }
  redrg(){
    this.router.navigate(['register']);
    }
}
