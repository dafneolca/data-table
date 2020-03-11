import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface userData {
  title: string;
  first_name: string;
  last_name: string;
  nationality: string;
}

export interface columnOptions {
  name: string;
  sortable: boolean;
  smallCell: boolean;
}

const ELEMENT_DATA: userData[] = [
  { title: 'Mr', first_name: 'Christopher', last_name: 'Hoffman', nationality: 'United States' },
  { title: 'Mrs', first_name: 'Ruth', last_name: 'Baily', nationality: 'He' },
  { title: 'Mrs', first_name: 'Esmira', last_name: 'Hüseynzada', nationality: 'Azerbaijan' },
  { title: 'Mrs', first_name: 'Azerbaijan', last_name: 'something?', nationality: 'Be' },
  { title: 'Mss', first_name: 'Boron', last_name: 'something?', nationality: 'B' },
];

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: any[] = [];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumnsObj: columnOptions[] = [
    { name: 'title', sortable: false, smallCell: true },
    { name: 'first_name', sortable: true, smallCell: false },
    { name: 'last_name', sortable: true, smallCell: false },
    { name: 'nationality', sortable: true, smallCell: false }
  ];

  ngOnInit() {
    this.displayedColumnsObj.forEach(obj => this.displayedColumns.push(obj.name));
    this.dataSource.sort = this.sort;
  }

}



