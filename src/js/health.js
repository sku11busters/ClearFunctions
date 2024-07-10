export function checkHealth(status) {
    if (status.health > 50) {
      return 'healthy';
    } else if (status.health >= 15 && status.health <= 50) {
      return 'wounded';
    } else {
      return 'critical';
    }
}