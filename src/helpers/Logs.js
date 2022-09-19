class Logs {
  constructor() {
    this.color = "";
    this.icon = "";
    this.now = new Date().toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  default(message) {
    this.write(message);
  }

  info(message) {
    this.color = "\x1b[36m%s\x1b[0m";
    this.icon = "💬";

    this.write(message);
  }

  warning(message) {
    this.color = "\x1b[33m%s\x1b[0m";
    this.icon = "⚠️";

    this.write(message);
  }

  error(message) {
    this.color = "\x1b[31m%s\x1b[0m";
    this.icon = "⛔️";

    this.write(message);
  }

  success(message) {
    this.color = "\x1b[32m%s\x1b[0m";
    this.icon = "✅";

    this.write(message);
  }

  write(message) {
    this.color.length > 0
      ? console.log(this.color, `[${this.now}] ${this.icon} ${message}`)
      : console.log(`[${this.now}] ${message}`);
  }
}

module.exports = new Logs();
