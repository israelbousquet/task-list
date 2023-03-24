import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: HotToastService) {}

  showToastSucess(message: string) {
    this.toast.success(message, {
      position: 'bottom-left',
      duration: 2000,
      style: {
        border: 'none',
        borderRadius: '10px',
        padding: '16px 24px',
        color: '#ffffff',
        backgroundColor: '#111214',
        boxShadow: '10px 10px 21px -12px rgba(0,0,0,0.6)',
      },
      iconTheme: {
        primary: 'rgb(66, 233, 16)',
        secondary: '#FFFAEE',
      },
    });
  }

  showGoodJob(message: string) {
    this.toast.show(message, {
      duration: 2000,
      position: 'bottom-left',
      icon: '👏',
      style: {
        border: 'none',
        borderRadius: '10px',
        padding: '16px 24px',
        color: '#ffffff',
        backgroundColor: '#111214',
        boxShadow: '10px 10px 21px -12px rgba(0,0,0,0.6)',
      },
      iconTheme: {
        primary: 'rgb(66, 233, 16)',
        secondary: '#FFFAEE',
      },
    });
  }
}
