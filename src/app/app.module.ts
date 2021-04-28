import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileTableComponent } from '../file-table/file-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort';
import { AddemployeeComponent } from '../file-table/addemployee/addemployee.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    FileTableComponent,
    AddemployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule ,
    MatButtonModule,
    MatIconModule  ,
    MatSortModule  ,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
