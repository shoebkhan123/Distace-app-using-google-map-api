import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-direction-distance',
  templateUrl: './direction-distance.page.html',
  styleUrls: ['./direction-distance.page.scss'],
})
export class DirectionDistancePage implements OnInit, AfterViewInit {

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  /* Form to accept source and destination */
  directionForm: FormGroup;
  /* Time between two distance */
  duration: string;
  /* Time distance two distance */
  distance: string;
  /* is end riding button clicked to show distance and time*/
  isRidingEnd: boolean = false;
  /* is start riding button clicked to enable end riding button */
  isStartButton: boolean = true;

  /* referance of map div */
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  constructor( private toastCtrl: ToastController, private fb: FormBuilder) {
    this.createDirectionForm();
  }

  ngOnInit() {
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 4,
      center: {lat: 20.5937, lng: 78.9629}
    });
    this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute() {
    this.isStartButton = false;
    const that = this;
    this.directionsService.route({
      origin: that.directionForm.value.source,
      destination: this.directionForm.value.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        const res = response.routes[0].legs[0];
        console.log(res.start_address)
        localStorage.setItem('start_address', res.start_address);
        this.duration =  res.duration.text;
        this.distance = res.distance.text;    
        that.directionsDisplay.setDirections(response);
      } else {
        this.isStartButton = true;
        that.distance = '0';
        that.duration = '0';
        this.showToast(status);
      }
    });
  }

  onEndRiding() {
    this.isRidingEnd = true;
  }

  showToast(msg: string) {
    this.toastCtrl.create({
      message: `Directions request failed due to ${msg}`,
      duration: 5000
    }).then(toastEl => {
      toastEl.present();
    });
  }

}