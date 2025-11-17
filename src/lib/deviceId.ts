const DEVICE_ID_KEY = '@pomodoro-timer:device-id'

export function getDeviceId(): string {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY)
  
  if (!deviceId) {
    deviceId = `device_${crypto.randomUUID()}_${Date.now()}`
    localStorage.setItem(DEVICE_ID_KEY, deviceId)
  }
  
  return deviceId
}

