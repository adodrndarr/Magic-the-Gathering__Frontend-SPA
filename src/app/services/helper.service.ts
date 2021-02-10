import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() { }


  filterItems(itemsToFilter, property, searchItems): any {
    return itemsToFilter.filter(item => {
      return item[property].some(mainItem => {
        return searchItems.some(searchItem => {
          return searchItem.toLowerCase() === mainItem.toLowerCase();
        });
      });
    });
  }

  sortDescendingByName(item1, item2): number {
    let item1Name = item1.name.toLowerCase();
    let item2Name = item2.name.toLowerCase();

    if (item1Name < item2Name) {
      return -1;
    }
    if (item1Name > item2Name) {
      return 1;
    }
    return 0;
  }

  sortAscendingByName(item1, item2): number {
    let item1Name = item1.name.toLowerCase();
    let item2Name = item2.name.toLowerCase();

    if (item1Name < item2Name) {
      return 1;
    }
    if (item1Name > item2Name) {
      return -1;
    }
    return 0;
  }

  filterByNameOrText(obj: any, searchTerm: string): boolean {
    let hasSuchName: boolean;
    let hasSuchText: boolean;

    hasSuchName = this.checkTermPresenceIn(obj.name, searchTerm);
    hasSuchText = this.checkTermPresenceIn(obj.text, searchTerm);
    
    return hasSuchName || hasSuchText;
  }

  checkTermPresenceIn(text: string, term: string): boolean {
    if (text) {
      const textToCheck = text.toLowerCase();
      const searchTerm = term.toLowerCase();

      return textToCheck.includes(searchTerm);
    }

    return false;
  }
}
