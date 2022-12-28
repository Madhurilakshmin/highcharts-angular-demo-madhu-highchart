import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('charts') public chartEl: ElementRef;
  @ViewChild('barChart') public barChartEl: ElementRef;
  @ViewChild('yearWiseChart') public yearWiseChartEl: ElementRef;
  @ViewChild('lineChart') public lineChart: ElementRef;
  constructor(private highcharts: HighchartsService) {}
  ngOnInit() {
    this.highcharts.createChart(
      this.chartEl.nativeElement,
      this.myColumChatOptions
    );
    this.highcharts.createChart(
      this.barChartEl.nativeElement,
      this.myBarOptions
    );
    this.highcharts.createChart(
      this.yearWiseChartEl.nativeElement,
      this.yerWiseBarOptions
    );
    this.highcharts.createChart(
      this.lineChart.nativeElement,
      this.lineChartOptions
    );
  }
  myColumChatOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Monthly Sales chart',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Sales Amount',
      },
    },
    legend: {
      reversed: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Sales',
        data: [500, 300, 400, 700, 200, 200, 200, 200, 300, 200, 100, 200],
      },
    ],
  };

  myBarOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Monthly Sales chart',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total consumption',
      },
    },
    legend: {
      reversed: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Sales',
        data: [500, 300, 400, 700, 200, 200, 200, 200, 300, 200, 100, 200],
      },
      {
        name: 'Goods',
        data: [200, 200, 300, 200, 100, 200, 500, 300, 400, 700, 200, 200],
      },
      {
        name: 'Effort',
        data: [300, 400, 400, 200, 500, 200, 500, 300, 400, 700, 200, 200],
      },
    ],
  };

  yerWiseBarOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Yearly Sales chart',
    },
    xAxis: {
      categories: [
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total consumption',
      },
    },
    legend: {
      reversed: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Sales',
        data: [500, 300, 400, 700, 200, 200, 200, 200, 300, 200, 100, 200],
      },
      {
        name: 'Goods',
        data: [200, 200, 300, 200, 100, 200, 500, 300, 400, 700, 200, 200],
      },
      {
        name: 'Effort',
        data: [300, 400, 400, 200, 500, 200, 500, 300, 400, 700, 200, 200],
      },
    ],
  };

  lineChartOptions = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Yearly Sales chart',
    },
    xAxis: {
      categories: [
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'March',
        'April',
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total consumption',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {},
    series: [
      {
        name: 'Sales',
        data: [500, 300, 400, 700, 200, 200, 200, 200, 300, 200, 100, 200],
      },
    ],
  };
}
