import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewMember } from '../../core/models/models';
import { CrewService } from '../../services/crew.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  crewMember!: CrewMember;
  isMenuVisible = false;
  isNavbarVisible = false;

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#menu-dropdown') && !target.closest('#navbar')) {
      this.isMenuVisible = false;
      this.isNavbarVisible = false;
    }
  }

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewService.crewMember$.subscribe(
      (member: CrewMember) => (this.crewMember = member),
    );
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
