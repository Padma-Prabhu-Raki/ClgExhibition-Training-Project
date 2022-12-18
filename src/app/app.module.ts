import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeExhibitionComponent } from './college-exhibition/college-exhibition.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampledashboardComponent } from './sampledashboard/sampledashboard.component';
import {MatTableModule} from '@angular/material/table'
import { SampleServiceService } from './sample-service.service';
import { HttpClientModule } from '@angular/common/http';
import { JsondashboardComponent } from './jsondashboard/jsondashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderdashboardComponent } from './headerdashboard/headerdashboard.component';
import { AddNewstudentComponent } from './add-newstudent/add-newstudent.component';
import { CardRoutingComponent } from './card-routing/card-routing.component';
import {MatCardModule} from '@angular/material/card';
import { EditdashboardComponent } from './editdashboard/editdashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ToggleSidenavComponent } from './toggle-sidenav/toggle-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CompinteractdetailsComponent } from './compinteractdetails/compinteractdetails.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StepperSelectorComponent } from './stepper-selector/stepper-selector.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Routerguard } from './routerguard';
import { CardsTopicsexhibitionsComponent } from './cards-topicsexhibitions/cards-topicsexhibitions.component';
import {MatListModule} from '@angular/material/list';
import { SampleDirective } from './sample.directive';
import {MatExpansionModule} from '@angular/material/expansion'
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CollegeExhibitionComponent,
    SampledashboardComponent,
    JsondashboardComponent,
    HeaderdashboardComponent,
    AddNewstudentComponent,
    CardRoutingComponent,
    EditdashboardComponent,
    LoginpageComponent,
    ToggleSidenavComponent,
    CompinteractdetailsComponent,
    StepperSelectorComponent,
    CardsTopicsexhibitionsComponent,
    SampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatListModule,
    MatExpansionModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    Routerguard,
    SampleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
