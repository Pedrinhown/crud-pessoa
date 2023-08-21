import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent {
  @ViewChild("formEndereco") formEndereco!: NgForm;
  endereco!: Endereco;

  constructor(private enderecoService: EnderecoService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a endereco
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined)
      this.endereco = res;
    else
      throw new Error("Endereço não encontrada: id = " + id);
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEndereco.form.valid) {
      // Efetivamente atualiza a endereco 
      this.enderecoService.atualizar(this.endereco);
      // Redireciona para /enderecos/listar
      this.router.navigate(['/enderecos']);
    }
  }
}
