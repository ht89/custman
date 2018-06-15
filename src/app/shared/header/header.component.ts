import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    showSidebar = false;

    constructor(public router: Router) { }

    ngOnInit() {
    }

    goToMenuItem(route: string) {

        this.router.navigateByUrl(route);

        if (this.showSidebar) {
            this.showSidebar = false;
        }
    }
}
