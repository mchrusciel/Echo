import { Component } from '@angular/core';

import {entries} from '../entries';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent{
    entries = entries;

  share(){
      window.alert('The article has been shared')
  }
}
