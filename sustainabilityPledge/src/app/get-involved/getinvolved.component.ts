import { Component, OnInit} from '@angular/core';
import { GetInvolvedServiceService } from '../get-involved-service.service'
import { GetInvolvedUser } from '../models/getInvolvedUser';

@Component({
    selector: 'app-getinvolved',
    templateUrl: './getinvolved.component.html',
    styleUrls: ['./getinvolved.component.css']
})
export class GetInvolvedComponent implements OnInit {
    constructor(
        public getInvolvedService: GetInvolvedServiceService
    ) {
    }


    save(value){

    }
    ngOnInit(): void {}
}