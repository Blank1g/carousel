/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Carousel2Component } from './carousel2.component';

describe('Carousel2Component', () => {
  let component: Carousel2Component;
  let fixture: ComponentFixture<Carousel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});