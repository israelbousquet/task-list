import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';

import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss'],
})
export class TaskTitleComponent {
  @Input() projectName: string = '';
  @Input() projectIcon: string = '';

  constructor(
    private taskService: TaskService,
    private toastService: ToastService,
    public dialog: MatDialog
  ) {}

  deleteAllTasks() {
    if (this.taskService.actualTasks.length === 0) {
      return this.toastService.showToastError('Não existem tasks para excluir');
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja realmente excluir todas as Tasks?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteAllTasks();
        this.toastService.showToastSucess('Tasks deletadas com sucesso');
      }
    });
  }
}
