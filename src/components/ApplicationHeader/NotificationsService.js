export class NotificationsService {
  constructor(user) {
    this.user = user;
    this.socket = this.openSocket();
  }

  openSocket() {
    return new WebSocket('ws://localhost:5001');
  }

  onNotification(callback) {
    this.socket.onmessage = (event) => {
      let message;
      try {
        message = JSON.parse(event.data);
      } catch (error) {
        console.error(error);
        return;
      }
      if (message.type === 'notification') {
        callback(message.data);
      }
    };
  }

  initializeConnection() {
    this.socket = this.openSocket();
    this.socket.onopen = () => this.socket.send(JSON.stringify(this.user));
    this.socket.onmessage = this.logMessage;
    this.socket.onclose = this.reopenSocket;
  }

  reopenSocket() {
    const interval = setInterval(() => {
      if (this.socket.readyState === this.socket.OPEN) {
        this.initializeConnection();
        return clearInterval(interval);
      }
      this.openSocket();
    }, 1000);
  }
}
