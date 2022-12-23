import { LowerCasePipe } from '@angular/common';
import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-vendas-list',
  templateUrl: './vendas-list.component.html',
  styleUrls: ['./vendas-list.component.css']
})
export class VendasListComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'progress', 'cpf', 'endereco'];
  dataSource: MatTableDataSource<UserData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { 
    // Create 100 users
    const users = Array.from({length: 50}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    cpf: CPF[Math.round(Math.random() * (CPF.length - 1))],
    progress: Math.round(Math.random() * 100).toString(),
    endereco: ENDERECO[Math.round(Math.random() * (ENDERECO.length - 1))],
  };
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  cpf: string;
  endereco: string;
}

/** Constants used to fill up our data base. */
const ENDERECO: string[] = [
  'Rua Altamiro Da Costa Neves, 732',
  'Rua Antonio Scherer, 555',
  'Avenida lagostinha assada, 120',
  'Travessa Da Ponta Da Paliossa',
  'Avenida Luiz Barbosa, 135',
  'Rua Fernanda Magalhães Silva, 900',
  'Rua Pomerode, 99',
  'Rua Frederico Antunes, 7',
  'Rua Margarida Floriana, 2',
  'Rua Olinda, 9',
];
const NAMES: string[] = [
  'Joao',
  'Maria',
  'Ariovaldo',
  'Thiago',
  'Alex',
  'Fernanda',
  'Bruna',
  'Andreia',
  'Antunes',
  'Oliveira',
  'Sargento',
  'Jaspion',
  'Naruto',
  'Amanda',
  'Mineiro',
  'Silvia',
  'Vanessa',
  'Jonas',
  'Sparky',
]
const CPF: string[] = [
'09104000010',
'07804000010',
'08804043510',
'09104123102',
'08104000030',
'06104000040',
'05104000010',
'04104000060',
'03104000010',
'02104000010',
'02104000010',
];

;

