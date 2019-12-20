import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonDetail } from 'src/app/models/pokemonDetailsRequest';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.page.html',
  styleUrls: ['./modal-pokemon.page.scss'],
})
export class ModalPokemonPage implements OnInit {

  @Input() url: string;
  model: PokemonDetail;


  radarChartOptions: RadialChartOptions = {
      responsive: true,
    };
    public radarChartLabels: Label[] = [];
  
    public radarChartData: ChartDataSets[] = [
      { data: [], label: '' }
    ];
    public radarChartType: ChartType = 'radar';
  
    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  


  constructor(
    private modalCtrl: ModalController,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService
      .getPokemonDetails(this.url)
      .then(data => {
        this.model = data;
        this.radarChartLabels = data.stats.map(s => s.stat.name);
        this.radarChartData[0].data = data.stats.map(s => s.base_stat);
      });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
