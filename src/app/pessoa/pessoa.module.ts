import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { FormsModule } from '@angular/forms';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ModalPessoaComponent } from './modal-pessoa/modal-pessoa.component';



@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    ModalPessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
