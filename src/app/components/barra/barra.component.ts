import { Component} from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
   'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'];
  public barChartType:string = 'line'; // bar, horizontal bar, pie, line, doughnout, radar, polar Aerea
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [37, 44, 42, 45, 18, 6, 8, 11, 9, 17, 16, 37], label: '10-05-09 QUEMA DE MATORRALES'},
    {data: [11, 17, 10, 20, 15, 28, 13, 27, 29, 19, 16, 21], label: '10-06 ACCIDENTE DE TRANSITO'},
    {data: [37, 44, 42, 20, 15, 13, 11, 36, 39, 38, 42, 40], label: '10-09-05 REBROTE DE INCENDIO'},
    {data: [10, 10, 8, 5, 8, 6, 11, 7, 9, 9, 6, 7], label: '10-10 INCENDIO DECLARADO'},
    {data: [28, 28, 20, 19, 36, 47, 40, 54, 54, 26, 27, 29], label: '10-10-01 INCENDIO DECLARADO SECTOR RURAL'},
    {data: [15, 19, 18, 18, 16, 15, 14, 18, 17, 19, 15, 17], label: '10-10-02 INCENDIO DECLARADO DE MATERIAS PELIGROSAS'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100), 19, 80,
                (Math.random() * 100), 26, 
                (Math.random() * 100), 20,
                (Math.random() * 100), 15,
                (Math.random() * 100), 30,
                (Math.random() * 100), 25,
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
