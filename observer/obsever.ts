// Subject (Observable)
interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(message: string): void;
}

// Observer
interface Observer {
  update(message: string): void;
}

// Concrete Subject
class NotificationService implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
    console.log(`${(observer as any).name} subscribed.`);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
    console.log(`${(observer as any).name} unsubscribed.`);
  }

  notify(message: string): void {
    console.log(`📢 Notifying ${this.observers.length} users...`);
    this.observers.forEach(observer => observer.update(message));
  }
}

// Concrete Observer
class User implements Observer {
  constructor(public name: string) {}

  update(message: string): void {
    console.log(`🔔 ${this.name} received: "${message}"`);
  }
}

const notificationService = new NotificationService();

const abhinav = new User("Abhinav");
const rutvik = new User("Rutvik");
const sumit = new User("Sumit");
const atharv = new User("Atharv");

notificationService.subscribe(abhinav);
notificationService.subscribe(rutvik);

notificationService.notify("🔥 New backend tutorial is live!");

notificationService.unsubscribe(rutvik);

notificationService.notify("📣 Live Q&A session starts in 30 minutes.");

notificationService.subscribe(sumit);
notificationService.subscribe(atharv);

notificationService.notify("🚀  New Series Launching Tomorrow!");
