import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ConfirmDialogComponent } from 'src/app/widgets/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from 'src/app/widgets/edit-dialog/edit-dialog.component';

import { Project } from '../../../interfaces/task';
import { TaskService } from './../../../services/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() projectIndex: number;

  taskPercentage: number;
  dataOfCreation: string;

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private toast: HotToastService,
    private toastService: ToastService
  ) {}
  ngOnInit() {
    this.countTaskPercentage();
    this.getData();
  }

  countTaskPercentage() {
    this.taskPercentage = this.project.tasksPercentage;
  }

  getData() {
    this.dataOfCreation = this.project.dataCreation;
  }

  editProject(projectName: string) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: projectName,
    });

    dialogRef.afterClosed().subscribe((inputValue: string) => {
      if (inputValue) {
        this.taskService.editProject(this.projectIndex, inputValue);
        this.toastService.showToastSucess('Projeto editado com sucesso');
      }
    });
  }

  deleteProject() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja excluir o Projeto?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteProject(this.projectIndex);
        this.toastService.showToastSucess('Projeto deletado com sucesso');
      }
    });
  }
}
