import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Vendas } from "app/models/vendas";

@Component({
  selector: "app-vendas-list",
  templateUrl: "./vendas-list.component.html",
  styleUrls: ["./vendas-list.component.css"],
})
export class VendasListComponent implements OnInit {
  ELEMENT_DATA: Vendas[] = [
    {
      id: 1,
      name: "Alex",
      progress: "80",
      cpf: "0675430901",
      endereco: "Rua antonio luiz Baldino",
    },
    {
      id: 2,
      name: "Jose",
      progress: "50",
      cpf: "1220000000",
      endereco: "Rua antonio luiz Baldino",
    },
    {
      id: 3,
      name: "Maria",
      progress: "90",
      cpf: "1235430901",
      endereco: "Rua antonio luiz Baldino",
    },
    {
      id: 4,
      name: "Myers",
      progress: "15",
      cpf: "5553000000",
      endereco: "Rua antonio luiz Baldino",
    },
    {
      id: 5,
      name: "Vorhees",
      progress: "15",
      cpf: "7773000000",
      endereco: "Rua antonio luiz Baldino",
    },
  ];

  displayedColumns: string[] = ["id", "name", "progress", "cpf", "endereco"];
  dataSource = new MatTableDataSource<Vendas>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

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
