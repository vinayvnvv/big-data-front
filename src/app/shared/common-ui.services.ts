import { Injectable } from '@angular/core';
import { RootScope } from './root.scope';

@Injectable()
export class NavigationService {
	constructor(
		   private rootScope: RootScope
		) {}


    hideFull() {
       this.rootScope.navigation.status = 0;
       this.rootScope.navigation.hide = true;
       this.rootScope.navigation.marginStaus = "-" + this.rootScope.navigation.width;
    }
    hideWithIcons() {
       this.rootScope.navigation.status = 1;
       this.rootScope.navigation.hide = true;
       this.rootScope.navigation.marginStaus = "-" + this.rootScope.navigation.icoWidth;
    }

    showFull() {
       this.rootScope.navigation.status = 2;
       this.rootScope.navigation.hide = false;
       this.rootScope.navigation.marginStaus = "0";
    }
    showWithIcons() {
       this.rootScope.navigation.status = 1;
       this.rootScope.navigation.hide = true;
       this.rootScope.navigation.marginStaus = "-" + this.rootScope.navigation.icoWidth;
    }

    toggleIco() {
      if(this.rootScope.navigation.status == 1) {
          this.showFull();
      } else {
        this.showWithIcons();
      }
    }

    toggleFull() {
      if(this.rootScope.navigation.status == 0) {
        this.showFull();
      } else {
        this.hideFull();
      }
    }
}