import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ITEMS, item } from './data';


/** @title Virtual scroll context variables */
@Component({
  selector: "cdk-virtual-scroll-context-example",
  styleUrls: ["cdk-virtual-scroll-context-example.css"],
  templateUrl: "cdk-virtual-scroll-context-example.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkVirtualScrollContextExample {
  itemSize = 35;
  elementCount: number;
  selectedAll = false;
  items: item[];


  constructor() {
    // laziness, dynamically add initial value to properties
    this.items = ITEMS.map(item => {
      if (
        item.subGroup ||
        (item.belongsToSubGroupId ? item.belongsToSubGroupId >= 0 : false)
      ) {
        item.expanded = true;
      }
      return item;
    });
  }

  getElementCount() {
    return document.getElementsByTagName("*").length;
  }

  trackById(index: number, item: item) {
    return item.pid || item.id;
  }

  selectAll() {
    this.items.forEach(item => (item.selected = item.selected ? !item.selected : true));
  }

  selectWholeGroup(item: item) {
    item.selected = item.selected ? !item.selected : true;
    // only subgroups have the ability to select all items
    if (!item.subGroup) {
      return;
    }

    this.items.forEach(listItem => {
      if (listItem.belongsToSubGroupId === item.id) {
        listItem.selected = item.selected;
      }
    });
  }

  expandCollapseGroup(item: item) {
    item.expanded = item.expanded ? !item.expanded : true;

    this.items = this.items.map(listItem => {
      if (listItem.belongsToSubGroupId === item.id) {
        listItem.expanded = item.expanded;
      }
      return listItem;
    });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
