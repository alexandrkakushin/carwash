
import {Component} from "@angular/core";
import {Message} from "primeng/api";
import {AdminService} from "../../model/datasource/admin.service";

@Component({
  selector: "admin",
  moduleId: module.id,
  templateUrl: "admin.component.html"
})

export class AdminComponent {

  msgs: Message[] = [];

  constructor(private adminService: AdminService) {}

  public fillOkei(): void {
    this.msgs = [];
    this.adminService.fillOkei()
      .subscribe(
        value => {
          this.msgs.push({severity: 'info', summary: "Импорт ОКЕИ", detail: "Импорт завершен"});
        }, error => {
          console.log(error);
          this.msgs.push({severity: 'error', summary: "Импорт ОКЕИ", detail: "Ошибка импорта"});
        }
      )
  }
}
