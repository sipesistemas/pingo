import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PingoButtonComponent } from "./button";

@NgModule({
  imports: [CommonModule],
  declarations: [PingoButtonComponent],
  exports: [PingoButtonComponent]
})
export class ButtonModule {
}
