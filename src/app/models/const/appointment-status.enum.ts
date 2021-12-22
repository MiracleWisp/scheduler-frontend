export enum AppointmentStatus {
  DRAFT = "DRAFT",
  WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL",
  FUTURE = "FUTURE",
  DONE = "DONE",
  CANCELED = "CANCELED"
}

export const APPOINTMENT_STATUS_MAP: Map<AppointmentStatus, string> = new Map<AppointmentStatus, string>([
  [AppointmentStatus.CANCELED, 'Отменено'],
  [AppointmentStatus.DONE, 'Прошло'],
  [AppointmentStatus.FUTURE, 'Запланировано'],
  [AppointmentStatus.WAITING_FOR_APPROVAL, 'Ждет подтверждения специалиста'],
  [AppointmentStatus.DRAFT, 'Забронировано'],
])
