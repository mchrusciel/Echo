import { Component, OnInit } from '@angular/core';

import {entries} from '../entries';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
    entries = entries;

  constructor() { }

  ngOnInit(): void {
  }

}
