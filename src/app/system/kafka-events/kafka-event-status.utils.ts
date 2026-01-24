/**
 * Utility functions for Kafka Event status handling.
 */

/**
 * Kafka Event Status constants.
 */
export enum KafkaEventStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  FAILED = 'FAILED',
  DLQ = 'DLQ'
}

/**
 * Gets the CSS class name for a Kafka event status.
 * @param {string} status Status from API (PENDING, SENT, FAILED, DLQ).
 * @returns {string} CSS class name for styling.
 */
export function getKafkaEventStatusColor(status: string): string {
  switch (status) {
    case KafkaEventStatus.PENDING:
      return 'status-pending';
    case KafkaEventStatus.SENT:
      return 'status-sent';
    case KafkaEventStatus.FAILED:
      return 'status-failed';
    case KafkaEventStatus.DLQ:
      return 'status-dlq';
    default:
      return 'status-unknown';
  }
}

/**
 * Formats retry count display string.
 * @param {number} retryCount Current retry count.
 * @param {number} maxRetries Maximum retries allowed.
 * @returns {string} Formatted retry count string (e.g., "2 / 3").
 */
export function formatKafkaEventRetryCount(retryCount: number, maxRetries: number): string {
  return `${retryCount} / ${maxRetries}`;
}
