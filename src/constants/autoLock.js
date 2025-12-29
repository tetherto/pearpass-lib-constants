export const AUTO_LOCK_TIMEOUT_OPTIONS = {
  SECONDS_30: { label: '30 seconds', value: 30 * 1000 },
  MINUTES_1: { label: '1 minute', value: 60 * 1000 },
  MINUTES_5: { label: '5 minutes', value: 5 * 60 * 1000 },
  MINUTES_15: { label: '15 minutes', value: 15 * 60 * 1000 },
  MINUTES_30: { label: '30 minutes', value: 30 * 60 * 1000 },
  HOURS_1: { label: '1 hour', value: 60 * 60 * 1000 },
  HOURS_4: { label: '4 hours', value: 4 * 60 * 60 * 1000 }
}

export const DEFAULT_AUTO_LOCK_TIMEOUT =
  AUTO_LOCK_TIMEOUT_OPTIONS.MINUTES_15.value
