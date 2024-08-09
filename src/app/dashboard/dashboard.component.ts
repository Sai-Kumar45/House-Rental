import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any;
  isSidebarHidden = false;

  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef;

  constructor(private route: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userinfo') || '{}');
  }

  logout() {
    localStorage.removeItem('userinfo');
    this.route.navigateByUrl('/');
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
    if (this.sidebar) {
      this.sidebar.nativeElement.classList.toggle('sidebar-hidden', this.isSidebarHidden);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.isSidebarHidden = false;
    }
  }
}
