import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent {
  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;

  constructor(private estadoService: EstadoService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a estado
    const res = this.estadoService.buscarPorId(id);
    if (res !== undefined)
      this.estado = res;
    else
      throw new Error("Estado não encontrada: id = " + id);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEstado.form.valid) {
      // Efetivamente atualiza a estado 
      this.estadoService.atualizar(this.estado);
      // Redireciona para /estados/listar
      this.router.navigate(['/estados']);
    }
  }
}
