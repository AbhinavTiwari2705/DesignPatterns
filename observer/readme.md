# 👀 Observer Pattern in TypeScript

This project demonstrates the **Observer Design Pattern** using TypeScript with a real-world inspired example — a notification system where users subscribe to updates.

## 📌 Concept

The **Observer Pattern** defines a one-to-many dependency between objects.  
When one object (**Subject**) changes state, all its dependents (**Observers**) are notified automatically.

This pattern is widely used in:

- Notification systems
- Pub/Sub architectures
- Event-driven applications
- UI frameworks like React (`useEffect`)
- Real-time systems (chat apps, stock tickers, etc.)

## 🚀 Use Case

Users (**Abhinav**, **Rutvik**, **Sumit**, and **Atharv**) can subscribe to a `NotificationService`.  
When the service pushes an update, all subscribed users receive it in real time.

## 🧱 Structure

- `Subject` interface defines `subscribe`, `unsubscribe`, and `notify`.
- `Observer` interface defines `update`.
- `NotificationService` implements `Subject`.
- `User` implements `Observer`.

## 📄 Example Output

Abhinav subscribed.
Rutvik subscribed.
📢 Notifying 2 users...
🔔 Abhinav received: "🔥 New backend tutorial is live!"
🔔 Rutvik received: "🔥 New backend tutorial is live!"
Rutvik unsubscribed.
📢 Notifying 1 users...
🔔 Abhinav received: "📣 Live Q&A session starts in 30 minutes."
Sumit subscribed.
Atharv subscribed.
📢 Notifying 3 users...
🔔 Abhinav received: "🚀  New Series Launching Tomorrow!"
🔔 Sumit received: "🚀  New Series Launching Tomorrow!"
🔔 Atharv received: "🚀  New Series Launching Tomorrow!"