import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

import { TaskService } from '../../../services/task.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.scss'],
})
export class TaskProgressComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private toastService: ToastService,
    private router: Router
  ) {}

  progress$$: Observable<number>;
  progress: number;

  ngOnInit(): void {
    this.taskService.getTotalPercentProgress();
    this.progressBehavior();
    this.showMessageWhenProgressCompleted();
  }

  progressBehavior() {
    this.taskService.taskPercentage$$.subscribe((value: number) => {
      return (this.progress = value);
    });
  }

  showMessageWhenProgressCompleted() {
    this.taskService.checkboxClickedToShowMessage$$.subscribe(
      (value: boolean) => {
        if (value && this.progress === 100) {
          if (
            value &&
            this.progress === 100 &&
            this.taskService.messageShownCount === 0
          )
            this.toastService.showGoodJob(
              'Parabéns! Você concluiu todas as tarefas'
            );
        }
      }
    );
  }
}
