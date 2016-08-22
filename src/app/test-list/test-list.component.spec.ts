/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TestListComponent } from './test-list.component';

describe('Component: TestList', () => {
  it('should create an instance', () => {
    let component = new TestListComponent();
    expect(component).toBeTruthy();
  });
});
